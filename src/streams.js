const fs = require('fs');
const path = require('path');
const { pipeline, Transform } = require('stream');
const { caesarCipher } = require('./caesar-cipher');

module.exports.Streams = ({ action, shift, input, output }) => {
  let firstArgPipeline = process.stdin;
  let lastArgPipeline = process.stdout;

  if (input !== undefined) {
    if (path.extname(input) !== '.txt') {
      process.stderr.write(
        `wrong file extension: ${path.extname(input)} to .txt` + '\n'
      );
      return;
    }

    if (fs.existsSync(input) === false) {
      process.stderr.write('No such file exists' + '\n');
      return;
    }

    firstArgPipeline = fs.createReadStream(input, 'utf8');
  }
  if (output !== undefined) {
    if (path.extname(output) !== '.txt') {
      process.stderr.write(
        `wrong file extension: ${path.extname(output)} to .txt` + '\n'
      );
      return;
    }
    if (fs.existsSync(output) === false) {
      process.stderr.write('No such file exists' + '\n');
      return;
    }

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
      const resultString = `${chunk.toString()}`;
      const resultFun = caesarCipher(resultString, shift, action);
      callback(null, `${resultFun}\n`);
    }
  }
  const transformStream = new CustomTransformStream(
    { highWaterMark: 4 },
    'utf8'
  );

  pipeline(firstArgPipeline, transformStream, lastArgPipeline, err => {
    if (err) {
      console.error('failed.', err);
    } else {
      console.log(action, ' succeeded.');
    }
  });
};
