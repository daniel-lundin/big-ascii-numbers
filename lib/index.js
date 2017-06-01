const { numbers: asciiNumbers, DIGIT_HEIGHT } = require('./ascii-numbers');


function numberToAscii(number) {
  const numberString = `${number}`;
  const numberIndices = numberString.split('').map((d) => parseInt(d, 10));
  const asciiDigits = numberIndices.map((numberIndex) => asciiNumbers[numberIndex]);

  const digitHeight = 5;
  return Array.from({ length: digitHeight }).map((_, digitRow) =>
    asciiDigits.reduce((acc, curr) => ` ${acc}${curr[digitRow]} `, '')
  );
}

module.exports = numberToAscii;
