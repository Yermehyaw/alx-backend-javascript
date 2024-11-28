/**
 * Utilizing process module for receiving inputs and dosplaying
 * backend outputs to user
 */

// Receive user's name
process.stdout.write('Welcome to Holberton School, what is your name?' + '\n');

// Set enconding
process.stdin.setEncoding('utf-8');

// Print user's name
process.stdin.on('data', (name) => {
  process.stdout.write('Your name is: ' + name.trim() + '\n');
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing' + '\n');
  }
});
