/**
 * A nodeJs server to handle diff routes
 */
const { createServer } = require('node:http');
const url = require('url');
const fs = require('fs');

const host = '127.0.0.1';
const port = '1245';
const dbPath = process.argv[2]; // assuming the dbname will always be passed as a  CLI arg

const app = createServer((req, res) => {
  // parse url to retrieve the requested route
  const urlParsed = url.parse(req.url, true);
  const route = urlParsed.pathname;

  if (route === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (route === '/students') {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        throw new Error(`Cannot load the database: ${err}`);
      }
      const dataArr = data.split('\n');
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

      res.statusCode = 200;
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${noStudents}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.end();
    });
  }
});

// Activate server
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
