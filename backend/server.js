// Import the Express framework to build the web server
const express = require("express");

// Import the dotenv package to load environment variables from a .env file
const dotenv = require("dotenv");

// Configure dotenv to read environment variables
dotenv.config();

// Import the cors package to enable Cross-Origin Resource Sharing
const cors = require("cors");

const connectDB = require("./db/db");
const authRoutes = require("./routes/authRoutes");

// Get the port number from the environment variables
const port = process.env.PORT;

// Initialize the Express application
const app = express();

// Use the cors middleware to allow requests from other domains
app.use(cors());

// Use the json middleware to automatically parse JSON request bodies
app.use(express.json());

// Use the urlencoded middleware to parse URL-encoded data (like form submissions)
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);
 
//  call the connectDB function to establish the database connection.
connectDB();

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
