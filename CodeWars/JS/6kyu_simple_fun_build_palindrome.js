// https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/javascript

const buildPalindrome = str => {
    for (let i = 0; i <= str.length; i++) {
      if (str === [...str].reverse().join(``)) return str;
      str = str.slice(0, str.length - i) + str[i] + str.slice(str.length - i, str.length);
    }
  };

if (require.main.path.includes('mocha')) {
    const Test = require('chai');

    describe('Basic Tests', function () {
        it('It should works for basic tests.', function () {
            Test.assert.equal(buildPalindrome('abcdc'), 'abcdcba');
            Test.assert.equal(buildPalindrome('ababab'), 'abababa');
        });
    });
} else {
    console.log(buildPalindrome('abcdc'), 'abcdcba');
    console.log(buildPalindrome('ababab'), 'abababa');
    console.log(buildPalindrome('daee'), 'daeead');
}
