const fs = require('fs');
const path = require('path');

function read(input) {
  let stream = process.stdin;

  if (input) {
    stream = fs.createReadStream(path.join(__dirname, input), 'utf8');
  }

  return stream;
}

module.exports = read;
