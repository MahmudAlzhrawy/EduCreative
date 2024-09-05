// Import the MySQL module to interact with the MySQL database
const mysql = require("mysql");
const config = require("../db/config"); // Import database configuration
const pool = mysql.createPool(config); // Create a connection pool to the MySQL database

// Function to create a table in the database using the provided SQL schema
const createTable = (schema) => {
  return new Promise((resolve, reject) => {
    pool.query(schema, (err, results) => {
      if (err) {
        reject(err); // If there's an error, reject the promise
      } else {
        resolve(results); // Otherwise, resolve the promise with the results
      }
    });
  });
};

// Function to check if a record exists in a table by a specific column and value
// This function is designed to handle different types of users (students, teachers, parents)
const checkRecordExists = (tableName, column, value) => {
  // Map table names to their email columns
  const columnMapping = {
    students: 's_email',
    teachers: 't_email',
    parents: 'p_email'
  };

  // Get the actual column name based on the table name
  const actualColumn = columnMapping[tableName] || column;
  return new Promise((resolve, reject) => {
    // Prepare a SQL query to check if the record exists
    const query = `SELECT * FROM ${tableName} WHERE ${actualColumn} = ?`;

    // Execute the query with the provided value
    pool.query(query, [value], (err, results) => {
      if (err) {
        reject(err); // If there's an error, reject the promise
      } else {
        resolve(results.length ? results[0] : null); // If results exist, return the first result, else return null
      }
    });
  });
};

// Function to insert a new record into a specific table
const insertRecord = (tableName, record) => {
  return new Promise((resolve, reject) => {
    // Prepare a SQL query to insert the record
    const query = `INSERT INTO ${tableName} SET ?`;

    // Execute the query with the provided record
    pool.query(query, [record], (err, results) => {
      if (err) {
        reject(err); // If there's an error, reject the promise
      } else {
        resolve(results); // Otherwise, resolve the promise with the results
      }
    });
  });
};

// Export the utility functions to use in other files
module.exports = {
  createTable,
  checkRecordExists,
  insertRecord,
};
