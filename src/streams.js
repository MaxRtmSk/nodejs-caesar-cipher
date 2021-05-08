const fs = require('fs');
const { pipeline, Transform } = require('stream');
const { caesarCipher } = require('./caesar-cipher');

module.exports.Streams = ({ action, shift, input, output }) => {
  let firstArgPipeline = process.stdin;
  let lastArgPipeline = process.stdout;

  if (input !== undefined) {
    firstArgPipeline = fs.createReadStream(input, 'utf8');
  }
  if (output !== undefined) {
    lastArgPipeline = fs.createWriteStream(output, { flags: 'a' });
  }

  class CustomTransformStream extends Transform {
    constructor(opt) {
      super(opt);
    }

    _transform(chunk, encoding, callback) {
      const resultString = `${chunk.toString()}`;
      const resultFun = caesarCipher(resultString, shift, action);
      callback(null, resultFun);
    }
  }
  const transformStream = new CustomTransformStream({ highWaterMark: 2 });

  pipeline(firstArgPipeline, transformStream, lastArgPipeline, err => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
};
