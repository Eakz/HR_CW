// https://www.codewars.com/kata/58c218efd8d3cad11c0000ef/train/javascript

function binStr(s) {
    if(!s.includes('1')) return 0;
    if(!s.includes('0')) return 1;
    let attempts =s[0]==='1'?1:0;
    let prev = s[0];
    for(let i=1;i<s.length;i++){
        if(s[i]!==prev) attempts++;
        prev=s[i];
    }
    return attempts
}

function binStr(s) {
    return s.replace(/(.)\1+/g, '$1').replace(/^0/, '').length;
  }

if (require.main.path.includes('mocha')) {
    const Test = require('chai');

    describe('Basic Tests', function () {
        it('It should works for basic tests.', function () {
            Test.assert.equal(binStr('0101'), 3);

            Test.assert.equal(binStr('10000'), 2);

            Test.assert.equal(binStr('0000000000'), 0);

            Test.assert.equal(binStr('1111111111'), 1);

            Test.assert.equal(binStr('10101010101010'), 14);

            Test.assert.equal(binStr('11111000011111'), 3);

            Test.assert.equal(binStr('000001111100000'), 2);

            Test.assert.equal(binStr('111000000000'), 2);

            Test.assert.equal(binStr('00000000111111111'), 1);

            Test.assert.equal(binStr('1010101011111111111111000000000'), 10);
        });
    });
} else {
    console.log(binStr('0101'), 3);
    console.log(binStr('10000'), 2);
    console.log(binStr('0000000000'), 0);
    console.log(binStr('1111111111'), 1);
    console.log(binStr('10101010101010'), 14);
    console.log(binStr('11111000011111'), 3);
    console.log(binStr('000001111100000'), 2);
    console.log(binStr('111000000000'), 2);
    console.log(binStr('00000000111111111'), 1);
    console.log(binStr('1010101011111111111111000000000'), 10);
}
