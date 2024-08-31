// SQL schema for the 'students' table
const studentSchema = `
  CREATE TABLE IF NOT EXISTS students (
      s_id VARCHAR(255) PRIMARY KEY,
      s_userName VARCHAR(255) NOT NULL,
      s_code VARCHAR(255) NOT NULL,
      s_pass VARCHAR(255) NOT NULL,
      s_email VARCHAR(255) NOT NULL UNIQUE, -- Ensure email is unique
      s_schoolName VARCHAR(255) NOT NULL,
      s_studyingYear VARCHAR(50),
      s_branch VARCHAR(255)
  )
`;

// SQL schema for the 'teachers' table
const teacherSchema = `
  CREATE TABLE IF NOT EXISTS teachers (
      t_id VARCHAR(255) PRIMARY KEY,
      t_userName VARCHAR(255) NOT NULL,
      t_pass VARCHAR(255) NOT NULL,
      t_email VARCHAR(255) NOT NULL UNIQUE, -- Ensure email is unique
      t_schoolName VARCHAR(255) NOT NULL,
      t_materialName VARCHAR(255) NOT NULL -- Assuming 't_matrialname' is a typo
  )
`;

// SQL schema for the 'parents' table
const parentSchema = `
  CREATE TABLE IF NOT EXISTS parents (
      p_id VARCHAR(255) PRIMARY KEY,
      p_userName VARCHAR(255) NOT NULL,
      p_pass VARCHAR(255) NOT NULL,
      p_email VARCHAR(255) NOT NULL UNIQUE -- Ensure email is unique
  )
`;

// Export all schemas together
module.exports = {
  studentSchema,
  teacherSchema,
  parentSchema,
};
