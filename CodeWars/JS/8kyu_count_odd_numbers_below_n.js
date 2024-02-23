function oddCount(n) {
    return Math.floor(n/2)
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(oddCount(15), 7, 'Oops! Wrong.');
            assert.strictEqual(oddCount(15023), 7511, 'Oops! Wrong.');
        });
    });
} else {
    console.log(oddCount(15), 7, 'Oops! Wrong.');
    console.log(oddCount(15023), 7511, 'Oops! Wrong.');
}
