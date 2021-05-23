const { pipeline } = require('stream');
const read = require('./streams/read');
const transform = require('./streams/transform');
const write = require('./streams/write');
const options = require('./console-arg');

const { shift, action, input, output } = options;

pipeline(read(input), transform(shift, action), write(output), err => {
  if (err) {
    console.error('failed.', err);
  } else {
    // console.log(action, ' succeeded.');
  }
});
