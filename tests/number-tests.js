const { test } = require('kuta');
const numberToAscii = require('../lib');
const assert = require('assert');

test('should turn number into digit', () => {
  const expected = [
    ' ██████ ',
    '    ██  ',
    '   ██   ',
    '  ██    ',
    ' ██     '
  ]
  assert.deepEqual(numberToAscii(7), expected);
});

test('should turn number into multiple digits', () => {
  const expected = [
    '     ██    ████   ████  ',
    '    ███   ██  ██ ██  ██ ',
    '     ██      ██     ███ ',
    '     ██     ██   ██  ██ ',
    '    ████  ██████  ████  '
  ];
  assert.deepEqual(numberToAscii(123), expected);
});
