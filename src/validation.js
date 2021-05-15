const fs = require('fs');
const { errors } = require('./error/errors');

const validateShift = shiftValue => {
  if (!shiftValue) {
    errors('Error: Shift is missed! Try again with -s or --shift');
  }
  if (!Number.isInteger(Number(shiftValue))) {
    errors('Error: Shift value is missed! Try again with a number');
  }
};

const validateAction = actionValue => {
  if (!actionValue) {
    errors('Error: Action is missed! Try again with -a or --action');
  }
  if (actionValue !== 'encode' && actionValue !== 'decode') {
    errors(
      'Error: Action value is missed! Try again with encode or decode values'
    );
  }
};

const validatePath = path => {
  if (!fs.existsSync(path) && path) {
    errors('Error: no such file or directory!');
  }
};

const validateRequireArguments = (shift, action) => {
  validateShift(shift);
  validateAction(action);
};

module.exports = { validateRequireArguments, validatePath };
