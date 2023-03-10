// https://www.codewars.com/kata/5838a66eaed8c259df000003/train/javascript

function convertPalindromes(numbers) {
    return numbers.map(n => n.toString().split('').reverse().join('') === n.toString() ? 1 : 0);
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert.sameMembers;
    describe('Example Tests', function () {
        it('should return [1, 1, 0, 0, 0] on [22, 303, 76, 411, 89]', function () {
            Test(
                convertPalindromes([22, 303, 76, 411, 89]),
                [1, 1, 0, 0, 0],
            );
        });
        it('should return [0, 0, 1] on [653, 808, 5]', function () {
            Test(convertPalindromes([653, 808, 5]), [0, 1, 1]);
        });
        it('should return [1, 0, 0, 1, 0, 1] on [4, 23, 441, 565, 19, 818]', function () {
            Test(
                convertPalindromes([4, 23, 441, 565, 19, 818]),
                [1, 0, 0, 1, 0, 1],
            );
        });
    });
} else {
    console.log(convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0]);
    console.log(convertPalindromes([653, 808, 5]), [0, 1, 1]);
    console.log(convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1]);
}
