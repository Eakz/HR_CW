// https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d/train/javascript
// github-copilot-disable

function realNumbers(n) {
    const f = Math.floor;
    return (
        n - f(n / 2) - f(n / 3) + f(n / 6) - f(n / 5) + f(n / 10) + f(n / 15) - f(n / 30)
    );
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;

    describe('Basic Tests:', function () {
        it('tests', function () {
            let arr = [
                [5, 1],
                [10, 2],
                [20, 6],
                [30, 8],
                [40, 10],
                [55, 15],
                [66, 17],
                [75, 20],
                [100, 26],
            ];
            for (let [n, expected] of arr) {
                let actual = realNumbers(n);
                assert.strictEqual(actual, expected, `n = ${n} `);
            }
        });
    });
} else {
    console.log('Run the tests');
    // Console log the tests
    let arr = [
        [5, 1],
        [10, 2],
        [20, 6],
        [30, 8],
        [40, 10],
        [55, 15],
        [66, 17],
        [75, 20],
        [100, 26],
    ];
    for (let [n, expected] of arr) {
        let actual = realNumbers(n);
        console.log(actual, expected, `n = ${n} `);
    }
}
