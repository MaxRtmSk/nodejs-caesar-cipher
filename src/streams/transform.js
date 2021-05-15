const { Transform } = require('stream');
// const { caesarCipher } = require('./caesar-cipher');

class CustomTransformStream extends Transform {
  constructor(opt) {
    super(opt);
  }

  //   _transform(chunk, encoding, callback) {
  // const resultString = `${chunk.toString()}`;
  // const resultFun = caesarCipher(resultString, shift, action);
  // callback(null, `${resultFun}\n`);
  //   }
}
const transform = new CustomTransformStream({ highWaterMark: 4 }, 'utf8');

module.exports = transform;
