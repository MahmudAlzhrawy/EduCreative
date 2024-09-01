const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  checkRecordExists,
  insertRecord,
} = require("../utils/sqlFunctions");

// Generate an access token
const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register a new user
// const register = async (req, res) => {
//   const { email, password, userType } = req.body;

//   if (!email || !password || !userType) {
//     return res.status(400).json({ error: "Email, Password, and User Type are required!" });
//   }

//   if (!['student', 'teacher', 'parent'].includes(userType)) {
//     return res.status(400).json({ error: "Invalid user type!" });
//   }

//   try {
//     const tableName = `${userType}s`; // Dynamically select table based on userType
//     const userAlreadyExists = await checkRecordExists(tableName, "email", email);
    
//     if (userAlreadyExists) {
//       return res.status(409).json({ error: "Email already exists" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = {
//       [`${userType}Id`]: uuidv4(), // Use dynamic key
//       email,
//       password: hashedPassword,
//     };

//     await insertRecord(tableName, user);
//     res.status(201).json({ message: "User created successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const register = async (req, res) => {
  const { email, password, userType } = req.body;

  if (!email || !password || !userType) {
    return res.status(400).json({ error: "Email, Password, and User Type are required!" });
  }

  if (!['student', 'teacher', 'parent'].includes(userType)) {
    return res.status(400).json({ error: "Invalid user type!" });
  }

  try {
    const tableName = `${userType}s`; // Dynamically select table based on userType
    const userAlreadyExists = await checkRecordExists(tableName, "email", email);
    
    if (userAlreadyExists) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      [`${userType}Id`]: uuidv4(), // Use dynamic property name
      email,
      password: hashedPassword,
    };

    await insertRecord(tableName, user);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Login a user
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and Password are required!" });
//   }

//   try {
//     // Check in all user types
//     const userTypes = ['students', 'teachers', 'parents'];
//     let existingUser = null;
//     let userType = '';

//     for (const type of userTypes) {
//       existingUser = await checkRecordExists(type, "email", email);
//       if (existingUser) {
//         userType = type.slice(0, -1); // Remove 's' to get the user type (e.g., 'students' -> 'student')
//         break;
//       }
//     }

//     if (existingUser && existingUser.password) {
//       const passwordMatch = await bcrypt.compare(password, existingUser.password);

//       if (passwordMatch) {
//         res.status(200).json({
//           userId: existingUser.userId,
//           email: existingUser.email,
//           userType,
//           access_token: generateAccessToken(existingUser.userId),
//         });
//       } else {
//         res.status(401).json({ error: "Invalid credentials" });
//       }
//     } else {
//       res.status(401).json({ error: "Invalid credentials" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required!" });
  }

  try {
    // Check in all user types
    const userTypes = ['students', 'teachers', 'parents'];
    let existingUser = null;
    let userType = '';

    for (const type of userTypes) {
      existingUser = await checkRecordExists(type, "email", email);
      if (existingUser) {
        userType = type.slice(0, -1); // Remove 's' to get the user type (e.g., 'students' -> 'student')
        break;
      }
    }

    if (existingUser && existingUser.password) {
      const passwordMatch = await bcrypt.compare(password, existingUser.password);

      if (passwordMatch) {
        res.status(200).json({
          userId: existingUser[`${userType}Id`], // Use dynamic property name
          email: existingUser.email,
          userType,
          access_token: generateAccessToken(existingUser[`${userType}Id`]),
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
