// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

/**
 * - 1-2 good - 'Publish!'
 * - 2 < good -  'I smell a series!'
 * - 0 = good -  'Fail!'
 **/

const well = x => {
    const c = x.reduce((acc, e) => (e === 'good' ? acc + 1 : acc), 0);
    return c > 2 ? 'I smell a series!' : c === 0 ? 'Fail!' : 'Publish!';
};

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
            assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
            assert.strictEqual(
                well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
                'I smell a series!',
            );
        });
    });
}
