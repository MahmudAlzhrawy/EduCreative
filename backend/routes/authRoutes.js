const express = require("express");
// Import the authentication controller functions
const { register, login } = require("../controllers/authControllers");

// Create a new router instance
const router = express.Router();

// Define a POST route for user registration
// The 'register' function handles the logic for user registration
router.post("/register", register);

// Define a POST route for user login
// The 'login' function handles the logic for user authentication
router.post("/login", login);

// Export the router to be used in other parts of the application
module.exports = router;
