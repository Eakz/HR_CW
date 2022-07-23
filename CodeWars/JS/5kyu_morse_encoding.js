// https://www.codewars.com/kata/536602df5d0266e7b0000d31/train/javascript
var Morse = {};

function decimalTo32BitBinary(dec){
    let binary = (dec >>> 0).toString(2);
    return new Array(32-binary.length+1).join('0') + binary;
}

function binaryToDecimal(x){
  if(x.length < 32) x = x + new Array(32 - x.length + 1).join('0');
  return ToInt32(parseInt(x, 2));
}

function ToInt32(x) {
  return x >= Math.pow(2, 31) ? x - Math.pow(2, 32) : x;
}

function trimZeros(s){
  while(s.charAt(0) === '0'){ s = s.substr(1); }
  while(s.charAt(s.length-1) === '0'){ s = s.slice(0, -1); }
  return s;
}

function getKeyByValue(val) {
  for(let key in Morse.alpha) {
    if(Morse.alpha[key] === val) { return key; }
  }
}

Morse.encode = function(message){
  let binaryString = message.split(' ').map(w => {
    return w.split('').map(ch => Morse.alpha[ch]).join('000');
  }).join('0000000').match(/.{1,32}/g);
  return binaryString.map(portion => binaryToDecimal(portion));
};

Morse.decode = function(integerArray){
  let binaryString = trimZeros(integerArray.map(a => decimalTo32BitBinary(a)).join(''));
  binaryString = binaryString.split('0000000').map(a => a.split('000'));
  return binaryString.map(str => {
    return str.map(ch => getKeyByValue(ch)).join('');
  }).join(' ');
};

Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(
                Morse.encode('HELLO WORLD'),
                [-1440552402, -1547992901, -1896993141, -1461059584],
            );
            Test.deepEqual(
                Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]),
                'HELLO WORLD',
            );
            Test.equal(Morse.encode('EEEEEEEIE'), [-2004318070, 536870912]);
            Test.equal(Morse.decode([-2004318070, 536870912]), 'EEEEEEEIE');
            Test.deepEqual(
                Morse.decode([-298086688]),
                'MMM',
                'Numbers must be converted into 32-bit integers. Try using a bitwise operator to force the conversion.',
            );
            Test.deepEqual(
                Morse.decode([3996880608]),
                'MMM',
                'Numbers must be converted into 32-bit integers. Try using a bitwise operator to force the conversion.',
            );
        });
    });
} else {
    // Encode
    console.log(
        Morse.encode('HELLO WORLD'),
        [-1440552402, -1547992901, -1896993141, -1461059584],
    );
    console.log(Morse.encode('EEEEEEEIE'), [-2004318070, 536870912]);
    // Decode
    console.log(
        Morse.decode([-1440552402, -1547992901, -1896993141, -1461059584]),
        'HELLO WORLD',
    );
    console.log(Morse.decode([-2004318070, 536870912]), 'EEEEEEEIE');
}
