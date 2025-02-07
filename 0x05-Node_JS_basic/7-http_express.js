/**
 * Set up a fairly more complex express js app
 */
const express = require('express');
const fs = require('fs').promises;

const port = 1245;
const dbName = process.argv[2];

// Middleware to handle db operation
const countStudents = async (req, res, next) => {
  if (!dbName || dbName !== 'database.csv') {
    res.send('This is the list of our students\nCannot load the database');
  } else {
    try {
      const data = await fs.readFile(dbName, 'utf-8');
      const dataArr = data.split('\n');
      let noStudents = dataArr.length - 1;

      const csStudents = [];
      const sweStudents = [];

      for (let idx = 1; idx < dataArr.length; idx += 1) {
        if (dataArr[idx] === '') {
          noStudents -= 1;
        }
        const studentDetails = dataArr[idx].split(',');
        if (studentDetails[3] === 'CS') {
          csStudents.push(studentDetails[0]);
        } else if (studentDetails[3] === 'SWE') {
          sweStudents.push(studentDetails[0]);
        }
      }
      const response = `This is the list of our students\nNumber of students: ${noStudents}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
      res.send(response);
    } catch (error) {
      console.log(error);
      // Do nothing
    }

    next(); // move to the next middleware if available
  }
};
// Express app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use('/students', countStudents);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
