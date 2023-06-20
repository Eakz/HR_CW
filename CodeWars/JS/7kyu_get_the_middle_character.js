// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    return s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s.slice(s.length / 2, s.length / 2 + 1);
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('GetMiddle', function () {
        it('Tests', function () {
            Test.equal(getMiddle('test'), 'es');
            Test.equal(getMiddle('testing'), 't');
            Test.equal(getMiddle('middle'), 'dd');
            Test.equal(getMiddle('A'), 'A');
        });
    });
} else {
    console.log(getMiddle('test'), 'es');
    console.log(getMiddle('testing'), 't');
    console.log(getMiddle('middle'), 'dd');
    console.log(getMiddle('A'), 'A');
}
