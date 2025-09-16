#!/usr/bin/node
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    const name = input.replace(/[\r\n]+$/, '');
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
