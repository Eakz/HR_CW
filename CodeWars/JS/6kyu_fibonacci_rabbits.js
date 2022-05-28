// https://www.codewars.com/kata/5559e4e4bbb3925164000125/train/javascript
function fib_rabbits(m, n) {
    let [mature, immature] = [0, 1];
    for (let i = 0; i < m; i++) {
      [mature, immature] = [immature + mature, mature * n];
    }
    return mature;
  }
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(fib_rabbits(0, 4), 0);
            Test.equal(fib_rabbits(1, 4), 1);
            Test.equal(fib_rabbits(4, 0), 1);
            Test.equal(fib_rabbits(6, 3), 40);
            Test.equal(fib_rabbits(8, 12), 8425);
            Test.equal(fib_rabbits(7, 4), 181);
        });
    });
} else {
    console.log(fib_rabbits(0, 4), 0);
    console.log(fib_rabbits(1, 4), 1);
    console.log(fib_rabbits(4, 0), 1);
    console.log(fib_rabbits(6, 3), 40);
    console.log(fib_rabbits(8, 12), 8425);
    console.log(fib_rabbits(7, 4), 181);
}
