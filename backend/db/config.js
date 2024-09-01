// Create a configuration object for the database connection
const config = {
    // Set the database host + user + password + name using an environment variable
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  };
  
  // Export the configuration object so it can be used in other parts of the application
  module.exports = config;
  