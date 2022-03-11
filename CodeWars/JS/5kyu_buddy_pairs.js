// https://www.codewars.com/kata/59ccf051dcc4050f7800008f/train/javascript
function buddy(start, limit) {
    const getSum = n => {
        let sum = 0;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                i === n / i ? (sum += i) : (sum += i + n / i);
            }
        }
        return sum;
    };
    for (let n = start; n <= limit; n++) {
        const current = getSum(n);
        if(n<current&&n===getSum(current)){
            return [n,current]
        }
    }

    return 'Nothing';
}
console.log(buddy(23, 4669), [48, 75]);
console.log(buddy(4952, 6539), [5775, 6128]);
console.log(buddy(381, 4318), [1050, 1925]);
console.log(buddy(2382, 3679), 'Nothing');
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Buddy Pairs', () => {
        it('Example Tests', () => {
            Test.deepEqual(buddy(23, 4669), [48, 75]);
            Test.deepEqual(buddy(4952, 6539), [5775, 6128]);
            Test.deepEqual(buddy(381, 4318), [1050, 1925]);
            Test.deepEqual(buddy(2382, 3679), 'Nothing');
        });
    });
}
