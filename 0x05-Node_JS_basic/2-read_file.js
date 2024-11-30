/**
 * Receive input data and parse synchrnously
 */
const fs = require('fs');

const countStudents = (filePath) => {
  try {
    // Open file
    const fd = fs.openSync(filePath, 'r');

    // Read data from file descriptor
    const buffer = Buffer.alloc(250); // create buffer for read storage
    const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
    // parse the read data stored in buffer
    const dataArr = buffer.toString('utf8', 0, bytesRead).trim().split('\n');
    const noStudents = dataArr.length - 1;
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

    // print parsed data
    console.log(`No of students: ${noStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

    // Close file after reading
    fs.closeSync(fd);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
