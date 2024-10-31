// https://www.codewars.com/kata/5b254b2225c2bb99c500008d/train/javascript

function promenade(walk) {
    let b4l = [1, 0];
    let b4r = [0, 1];
    const combine = ([l, m], [r, s]) => [l + r, m + s];
    let steps = [...walk];
    let result = combine(b4l, b4r);
    for (let i = 0; i < steps.length; i++) {
        const currentTurn = steps[i];
        if (currentTurn === 'L') {
            [b4l, result] = [result, combine(result, b4r)];
        }
        if (currentTurn === 'R') {
            [b4r, result] = [result, combine(result, b4l)];
        }
    }
    return result;
}
if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Sample Tests', function () {
        function act(choices, expected) {
            const actual = promenade(choices);
            const msg = `promenade('${choices}')`;
            assert.deepEqual(actual, expected, msg);
        }
        describe('Basic Test Cases', function () {
            const testCases = [
                ['', [1, 1]],
                ['L', [1, 2]],
                ['R', [2, 1]],
                ['LRLL', [4, 7]],
                ['LLRLR', [5, 13]],
                ['RRRLRRR', [19, 5]],
                ['LLLLRLLLL', [6, 29]],
                ['LLLLLLLLLL', [1, 11]],
            ];
            for (let [walk, expected] of testCases) {
                it(`walk = '${walk}'`, function () {
                    act(walk, expected);
                });
            }
        });
    });
} else {
    const testCases = [
        ['', [1, 1]],
        ['L', [1, 2]],
        ['R', [2, 1]],
        ['LRLL', [4, 7]],
        ['LLRLR', [5, 13]],
        // ["RRRLRRR", [19, 5]],
        // ["LLLLRLLLL", [6, 29]],
        // ["LLLLLLLLLL", [1, 11]]
    ];
    for (let [walk, expected] of testCases) {
        console.log(promenade(walk), ' should be - ', expected);
    }
}
