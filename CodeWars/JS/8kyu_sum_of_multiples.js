// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n, m) {
    if(m<=n*2){
        return "INVALID"
    }
    let result = 0
    for(let i=1;n*i<m;i++){
        result+=(n*i)
    }
    return result
}

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Tests', () => {
        it('should test', () => {
            assert.strictEqual(sumMul(0, 0), 'INVALID');
            assert.strictEqual(sumMul(2, 9), 20);
            assert.strictEqual(sumMul(4, -7), 'INVALID');
        });
    });
}
