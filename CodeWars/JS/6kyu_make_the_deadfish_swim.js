// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(data) {
    const [output, increment, decrement, square] = ['o', 'i', 'd', 's'];
    const actionDealer = ([val, arr], key) => {
        if (key === output) {
            return [val, [...arr, val]];
        }
        if (key === increment) {
            return [val + 1, arr];
        }
        if (key === decrement) {
            return [val - 1, arr];
        }
        if (key === square) {
            return [val * val, arr];
        }
        return [val, arr];
    };

    return data.split('').reduce(actionDealer,[0, []])[1];
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Example test', () => {
        it("parse('iiisxxxdoso') should return [8, 64]", () => {
            assert.deepEqual(parse('iiisxxxdoso'), [8, 64]);
        });
    });
} else {
    console.log(parse('iiisxxxdoso'), [8, 64]);
    console.log(parse('iiisdosodddddiso'), [8, 64, 3600]);
}
