const { Command } = require('commander');
const { validateRequireArguments, validatePath } = require('./validation');

const program = new Command();

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <type>', 'input file path')
  .option('-o, --output <type>', 'output file path')
  .option('-a, --action <type>', 'an action encode/decode')
  .parse(process.argv);

const options = program.opts();

validateRequireArguments(options.shift, options.action);

validatePath(options.input);
validatePath(options.output);

module.exports = options;
