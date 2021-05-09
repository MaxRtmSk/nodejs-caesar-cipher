const Alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const BigAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function moveLetter(indexLetter, shift, action) {
  let result = indexLetter;

  if (action === 'decode' && shift > 0) {
    for (let i = 0; i < shift; i++) {
      result--;
      if (result < 0) {
        result = 25;
      }
    }
  }

  if (action === 'decode' && shift < 0) {
    for (let i = 0; i > shift; i--) {
      result++;
      if (result === Alphabet.length) {
        result = 0;
      }
    }
  }

  if (action === 'encode' && shift > 0) {
    for (let i = 0; i < shift; i++) {
      result++;
      if (result === Alphabet.length) {
        result = 0;
      }
    }
  }

  if (action === 'encode' && shift < 0) {
    for (let i = 0; i > shift; i--) {
      result--;
      if (result < 0) {
        result = 25;
      }
    }
  }

  return result;
}

function assignLetter(letter, shift, action) {
  const indexLetter = Alphabet.indexOf(letter);
  const indexBigLetter = BigAlphabet.indexOf(letter);

  if (indexLetter !== -1) {
    return Alphabet[moveLetter(indexLetter, shift, action)];
  }

  if (indexBigLetter !== -1) {
    return BigAlphabet[moveLetter(indexBigLetter, shift, action)];
  }

  return letter;
}

module.exports.caesarCipher = (string, shift, action) => {
  const result = [];

  for (const value of string) {
    result.push(assignLetter(value, shift, action));
  }

  return result.join('');
};
