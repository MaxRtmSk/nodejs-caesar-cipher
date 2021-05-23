const fs = require('fs');
const { errors } = require('./error/errors');

const validateShift = shiftValue => {
  if (!shiftValue) {
    errors(Error('Error: Shift is missed! Try again with -s or --shift'));
  }
  if (!Number.isInteger(Number(shiftValue))) {
    errors(Error('Error: Shift value is missed! Try again with a number'));
  }
};

const validateAction = actionValue => {
  if (!actionValue) {
    errors(Error('Error: Action is missed! Try again with -a or --action'));
  }

  if (actionValue !== 'encode' && actionValue !== 'decode') {
    errors(
      Error(
        'Error: Action value is missed! Try again with encode or decode values'
      )
    );
  }
};

const validatePath = path => {
  if (path && !fs.existsSync(path)) {
    errors(Error('Error: no such file or directory!'));
  }
};

const validateRequireArguments = (shift, action) => {
  validateShift(shift);
  validateAction(action);
};

module.exports = { validateRequireArguments, validatePath };
