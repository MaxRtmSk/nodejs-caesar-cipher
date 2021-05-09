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
    lastArgPipeline = fs.createWriteStream(output, {
      flags: 'a',
      encoding: 'utf8'
    });
  }

  class CustomTransformStream extends Transform {
    constructor(opt) {
      super(opt);
    }

    _transform(chunk, encoding, callback) {
      // console.log(chunk)
      // const buf = Buffer.from(`${chunk}`, 'utf8');
      // console.log('buf', buf)
      // console.log('encoding',encoding)
      const resultString = `${chunk.toString()}`;
      const resultFun = caesarCipher(resultString, shift, action);
      callback(null, resultFun);
    }
  }
  const transformStream = new CustomTransformStream(
    { highWaterMark: 4 },
    'utf8'
  );

  pipeline(firstArgPipeline, transformStream, lastArgPipeline, err => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
};
