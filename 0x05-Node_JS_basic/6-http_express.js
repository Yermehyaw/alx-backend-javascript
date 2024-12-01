/**
 * Create aweb server with express framework
 */
const express = require('express');

const port = 1245;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
