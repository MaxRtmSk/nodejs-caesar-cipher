const { Command } = require('commander');

const program = new Command();

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode')
  .parse(process.argv);

// const options = program.opts();
