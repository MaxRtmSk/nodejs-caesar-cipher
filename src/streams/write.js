const fs = require('fs');
const path = require('path');

function write(output) {
  let stream = process.stdout;

  if (output) {
    stream = fs.createWriteStream(path.join(__dirname, output), {
      flags: 'a',
      encoding: 'utf8'
    });
  }

  return stream;
}

module.exports = write;
