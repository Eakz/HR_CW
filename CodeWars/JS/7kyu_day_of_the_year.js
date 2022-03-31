// https://www.codewars.com/kata/5a1ebe0d46d843454100004c/train/javascript

function toDayOfYear(arr) {
    for (let i = 1; i < arr[1]; i++)
      arr[0] += new Date(arr[2], i, 0).getDate();
    return arr[0];
  }
console.log(toDayOfYear([25, 12, 2017]), 359);
console.log(toDayOfYear([31, 10, 1991]), 304);
console.log(toDayOfYear([1, 5, 3000]), 121);
console.log(toDayOfYear([14, 3, 1066]), 73);
console.log(toDayOfYear([5, 11, 1604]), 310);

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(toDayOfYear([25, 12, 2017]), 359);
            Test.equal(toDayOfYear([31, 10, 1991]), 304);
            Test.equal(toDayOfYear([1, 5, 3000]), 121);
            Test.equal(toDayOfYear([14, 3, 1066]), 73);
            Test.equal(toDayOfYear([5, 11, 1604]), 310);
        });
    });
}
