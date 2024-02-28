// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

const solution = (s, f) => {
    const diff = f - s;
    const div = diff / 3 | 0;
    const mod = diff % 3;
    return div + mod;
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Example test cases', function () {
        it('Test case in description', function () {
            assert.strictEqual();
        });
    });
} else {
    console.log(solution(1, 5), 2);
}
