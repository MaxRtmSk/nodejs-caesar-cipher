// const fs = require('fs');
// const path = require('path');

const write = process.stdout;

// write = fs.createWriteStream(output, {
//   flags: 'a',
//   encoding: 'utf8'
// });

module.exports = write;

// if (input !== undefined) {
//     if (path.extname(input) !== '.txt') {
//       process.stderr.write(
//         `wrong file extension: ${path.extname(input)} to .txt` + '\n'
//       );
//       return;
//     }

//     if (fs.existsSync(input) === false) {
//       process.stderr.write('No such file exists' + '\n');
//       return;
//     }

//   }
//   if (output !== undefined) {
//     if (path.extname(output) !== '.txt') {
//       process.stderr.write(
//         `wrong file extension: ${path.extname(output)} to .txt` + '\n'
//       );
//       return;
//     }
//     if (fs.existsSync(output) === false) {
//       process.stderr.write('No such file exists' + '\n');
//       return;
//     }

//   }
