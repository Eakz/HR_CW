// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
const assert = require('chai').assert;
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(e=>e%2===0)
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
console.log(getEvenNumbers([1, 2]), [2]);
console.log(getEvenNumbers([12, 14, 15]), [12, 14]);
console.log(getEvenNumbers([13, 15]), []);
console.log(getEvenNumbers([1, 3, 9]), []);

if (require.main.path.includes('mocha')) {
    

    describe('Fixed tests', () => {
        it('should return an empty array if there are no even numbers', function () {
            assert.deepEqual(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
            assert.deepEqual(getEvenNumbers([1, 2]), [2]);
            assert.deepEqual(getEvenNumbers([12, 14, 15]), [12, 14]);
            assert.deepEqual(getEvenNumbers([13, 15]), []);
            assert.deepEqual(getEvenNumbers([1, 3, 9]), []);
        });
    });
}
