const { Command } = require('commander');
const { Streams } = require('./streams');

const program = new Command();

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode');

program.parse(process.argv);
const options = program.opts();

const checkShift = Number.isInteger(Number(options.shift));
const checkActon = options.action === 'encode' || options.action === 'decode';

if (checkShift && checkActon) {
  Streams(options);
} else {
  if (options.shift === undefined) {
    return console.log('you did not enter shift');
  }
  if (checkShift === false) return console.log('shift not number');
  if (checkActon === false) {
    return console.log(
      'you did not enter action, he should be "encode" or "decode"'
    );
  }
  console.log('unexpected error');
}
