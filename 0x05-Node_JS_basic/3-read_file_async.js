/**
 * Receive input and parse a file asynchrnously
 */
const fs = require('fs');

const args = process.argv;
if (!args[2]) {
  throw new Error('Cannot load the database');
}

const dbName = args[2];

// Automatically opens, reads and closes the file
fs.readFile(dbName, (err, fd) => {
  if (err) {
    throw new Error('Cannot load the database');
  }
  const dataArr = fd.toString().split('\n');
  const noStudents = dataArr.length - 1;
  console.log(`No of students: ${noStudents}`);

  const csStudents = [];
  const sweStudents = [];

  for (let idx = 1; idx < dataArr; idx += 1) {
    const studentDetails = dataArr[idx].split(',');
    if (studentDetails[3] === 'CS') {
      csStudents.push(studentDetails[0]);
    } else if (studentDetails[3] === 'SWE') {
      sweStudents.push(studentDetails[0]);
    }
  }

  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
});
