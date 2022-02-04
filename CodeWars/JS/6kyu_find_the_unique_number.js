// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

const findUniq=a=>{
    const numbers = new Set(a);
    let serial;
    for (let i=0;i<a.length;i++){
        if(serial===a[i]){
            break;
        }
        serial=a[i]
    }
    return [...numbers].filter(num=>num!==serial)[0]
};

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Example Tests', () => {
        it('Tests', () => {
            assert.strictEqual(findUniq([1, 0, 0]), 1);
            assert.strictEqual(findUniq([0, 1, 0]), 1);
            assert.strictEqual(findUniq([0, 0, 1]), 1);
            assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
            assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
            assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
        });
    });
}
