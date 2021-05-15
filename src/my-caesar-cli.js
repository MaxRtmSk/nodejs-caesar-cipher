const { pipeline } = require('stream');
const { read } = require('./streams/read');
const { transform } = require('./streams/transform');
const { write } = require('./streams/write');

// const checkShift = Number.isInteger(Number(options.shift));
// const checkActon = options.action === 'encode' || options.action === 'decode';

// if (checkShift && checkActon) {

// } else {
//   if (options.shift === undefined) {
//     return console.log('you did not enter shift');
//   }
//   if (checkShift === false) return console.log('shift not number');
//   if (checkActon === false) {
//     return console.log(
//       'you did not enter action, he should be "encode" or "decode"'
//     );
//   }
//   console.log('unexpected error');
// }

pipeline(read, transform, write, err => {
  if (err) {
    console.error('failed.', err);
  } else {
    // console.log(action, ' succeeded.');
  }
});
