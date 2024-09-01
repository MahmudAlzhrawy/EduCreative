// Import the MySQL module to interact with the MySQL database
const mysql = require("mysql");

// Import the database configuration from the config file
const config = require("./config");

// Define an asynchronous function to connect to the MySQL database
const connectDB = async () => {
  // Create a connection pool using the configuration object
  const pool = mysql.createPool(config);

  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    // If there's an error, log it
    if (err) {
      console.log({ error: err.message });
    }

    // If the connection is successful, log a confirmation message
    console.log("Connected to MySQL database");

    // Release the connection back to the pool
    connection.release();
  });
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
