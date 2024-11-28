/**
 * Receive input data and parse synchrnously
 */
const fs = require('fs');

const args = process.argv;
if (!args[2]) {
  throw new Error('Cannot load the database');
}

const filePath = args[2];

try {
  // Open file
  fd = fs.openSync(filePath, 'r');

  // Read data from file descriptor
  buffer = Buffer.alloc(250); // create buffer for read storage
  const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
  // parse the read data stored in buffer
  const dataArr = buffer.toString('utf8', 0, bytesRead).split('\n');
  for (const data in dataArr) {
    const noStudents = dataArr.length - 1
    condole.log()
  }
  console.log(dataArr)

  // Close file after reading
  fs.closeSync(fd);

} catch(err) {
  throw new Error('Cannot load the database');
}

