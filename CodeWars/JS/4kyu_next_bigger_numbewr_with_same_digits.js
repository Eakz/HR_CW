// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n){
    const arr = n.toString().split("").reverse();
    const i = arr.findIndex((d, _i) => d < arr[_i-1]);
    if (i === -1) return -1;
    const subarr = arr.slice(0, i);
    const j = subarr.findIndex((d) => d > arr[i]);
    subarr.splice(j, 1, arr[i]);
    return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
  }

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(nextBigger(12), 21);
            Test.equal(nextBigger(513), 531);
            Test.equal(nextBigger(2017), 2071);
            Test.equal(nextBigger(414), 441);
            Test.equal(nextBigger(144), 414);
        });
    });
} else {
    console.log(nextBigger(12), 21);
    console.log(nextBigger(513), 531);
    console.log(nextBigger(2017), 2071);
    console.log(nextBigger(414), 441);
    console.log(nextBigger(144), 414);
}
