// const fs = require('fs');
// const path = require('path');
// const { input } = require('./command');

const read = process.stdin;

// if (input) {
//   const existFile = fs.existsSync(path.join(__dirname, input));
//   if (existFile) {
//     read = fs.createReadStream(path.join(__dirname, input), 'utf8');
//   } else {
//     process.stderr.write(`Error: not exist file ${input}`);
//     process.exit();
//   }
// }

module.exports = read;
