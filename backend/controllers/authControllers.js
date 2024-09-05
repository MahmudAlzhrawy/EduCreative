require('dotenv').config();

// Import necessary modules
const { v4: uuidv4 } = require("uuid"); // UUID library to generate unique IDs
const jwt = require("jsonwebtoken"); // JWT library to handle authentication tokens
const bcrypt = require("bcryptjs"); // Bcrypt library to hash and compare passwords
const { checkRecordExists, insertRecord } = require("../utils/sqlFunctions"); // Import utility functions

// Function to generate a JWT token
const generateAccessToken = (userId) => {
  // Sign the token with a secret key and set an expiration time of 7 days
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Function to handle user registration
const register = async (req, res) => {
  const { email, password, userType, userName, code, schoolName, studyingYear, branch, matrialname } = req.body;

  // Validate the input: email, password, and userType are required
  if (!email || !password || !userType) {
    return res.status(400).json({ error: "Email, Password, and User Type are required!" });
  }

  // Ensure the userType is one of the allowed types: student, teacher, or parent
  if (!["student", "teacher", "parent"].includes(userType)) {
    return res.status(400).json({ error: "Invalid user type!" });
  }

  try {
    // Define the correct table and column names based on userType
    let tableName, idColumn, emailColumn, passwordColumn;

    if (userType === "student") {
      tableName = "students";
      idColumn = "s_id";
      emailColumn = "s_email";
      passwordColumn = "s_pass";
    } else if (userType === "teacher") {
      tableName = "teachers";
      idColumn = "t_id";
      emailColumn = "t_email";
      passwordColumn = "t_pass";
    } else if (userType === "parent") {
      tableName = "parents";
      idColumn = "p_id";
      emailColumn = "p_email";
      passwordColumn = "p_pass";
    }

    // Check if a user with the same email already exists in the table
    const userAlreadyExists = await checkRecordExists(tableName, emailColumn, email);

    // If a user with the same email is found, return an error
    if (userAlreadyExists) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash the user's password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the necessary fields
    const user = {
      [idColumn]: uuidv4(), // Generate a unique ID for the user
      [emailColumn]: email, // Store the user's email
      [passwordColumn]: hashedPassword, // Store the hashed password
    };

    // Add additional fields based on user type
    if (userType === 'student') {
      user.s_userName = userName;
      user.s_code = code;
      user.s_schoolName = schoolName;
      user.s_studyingYear = studyingYear;
      user.s_branch = branch;
    } else if (userType === 'teacher') {
      user.t_userName = userName;
      user.t_schoolName = schoolName;
      user.t_matrialname = matrialname; // Use `matrialname` from request body, not `code`
    } else if (userType === 'parent') {
      user.p_userName = userName;
    }

    // Insert the new user record into the correct table
    await insertRecord(tableName, user);

    // Return a success message
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    // If there's an error, return a server error message
    res.status(500).json({ error: error.message });
  }
};


// Function to handle user login
const login = async (req, res) => {
  const { email, password } = req.body; // Get email and password from the request body

  // Validate the input: email and password are required
  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required!" });
  }

  try {
    // Define the list of tables and their corresponding email and password columns
    const userTypes = [
      { table: "students", emailCol: "s_email", passCol: "s_pass", idCol: "s_id" },
      { table: "teachers", emailCol: "t_email", passCol: "t_pass", idCol: "t_id" },
      { table: "parents", emailCol: "p_email", passCol: "p_pass", idCol: "p_id" }
    ];

    let existingUser = null; // Variable to store the found user
    let userType = ""; // Variable to store the userType of the found user

    // Loop through the userTypes to find the user
    for (const type of userTypes) {
      // Check if the user exists in the current table
      existingUser = await checkRecordExists(type.table, type.emailCol, email);
      if (existingUser) {
        userType = type; // Store the matched type object for further use
        break; // Exit the loop if the user is found
      }
    }

    // If the user is found and the password matches, return the user data and a JWT token
    if (existingUser && existingUser[userType.passCol]) {
      const passwordMatch = await bcrypt.compare(password, existingUser[userType.passCol]);

      if (passwordMatch) {
        // Return the user data and a JWT token
        res.status(200).json({
          userId: existingUser[userType.idCol], // User ID
          email: existingUser[userType.emailCol], // User email
          userType: userType.table.slice(0, -1), // User type (student, teacher, or parent)
          access_token: generateAccessToken(existingUser[userType.idCol]), // JWT token
        });
      } else {
        res.status(401).json({ error: "Invalid password" }); // Return an error if the password is incorrect
      }
    } else {
      res.status(404).json({ error: "User not found" }); // Return an error if the user is not found
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Return a server error message if something goes wrong
  }
};


// Export the controller functions so they can be used in routes
module.exports = {
  register,
  login,
};
