// Import the MySQL module to interact with the MySQL database
const mysql = require("mysql");

// Import the database configuration from the config file
const config = require("../db/config");

// Create a connection pool using the configuration object
const pool = mysql.createPool(config);

// Function to create a table in the database using a provided schema
const createTable = (schema) => {
  return new Promise((resolve, reject) => {
    // Execute the SQL query to create the table
    pool.query(schema, (err, results) => {
      if (err) {
        // Reject the promise if there's an error
        reject(err);
      } else {
        // Resolve the promise with the results if successful
        resolve(results);
      }
    });
  });
};

// Function to check if a record exists in a table based on a specific column and value
const checkRecordExists = (tableName, column, value) => {
    // Mapping column names to match your schema
    const columnMapping = {
      students: 's_email',
      teachers: 't_email',
      parents: 'p_email'
    };
  
    const actualColumn = columnMapping[tableName] || column;
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${tableName} WHERE ${actualColumn} = ?`;
  
      pool.query(query, [value], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length ? results[0] : null);
        }
      });
    });
  };
  
  

// Function to insert a new record into a table
const insertRecord = (tableName, record) => {
  return new Promise((resolve, reject) => {
    // Construct the SQL query to insert the record
    const query = `INSERT INTO ${tableName} SET ?`;

    // Execute the query with the record data
    pool.query(query, [record], (err, results) => {
      if (err) {
        // Reject the promise if there's an error
        reject(err);
      } else {
        // Resolve the promise with the results if successful
        resolve(results);
      }
    });
  });
};

// Export the utility functions so they can be used in other parts of the application
module.exports = {
  createTable,
  checkRecordExists,
  insertRecord,
};
