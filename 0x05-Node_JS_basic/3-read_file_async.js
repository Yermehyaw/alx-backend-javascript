/**
 * Receive input and parse a file asynchrnously
 */
const fs = require('fs').promises;

const countStudents = async (dbName) => {
  try {
    // Automatically opens, reads and closes the file
    const data = await fs.readFile(dbName, 'utf-8');
    const dataArr = data.split('\n');

    const noStudents = dataArr.length - 1;
    console.log(`Number of students: ${noStudents}`);

    const csStudents = [];
    const sweStudents = [];

    for (let idx = 1; idx < dataArr.length; idx += 1) {
      const studentDetails = dataArr[idx].split(',');
      if (studentDetails[3] === 'CS') {
        csStudents.push(studentDetails[0]);
      } else if (studentDetails[3] === 'SWE') {
        sweStudents.push(studentDetails[0]);
      }
    }

    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
