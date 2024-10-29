// optimize
function findX(n) {
    let x = 0;
    const step = n * 2;
    let cycleSum = 0;
    for (let i = 1; i < n * 2; i++) {
        cycleSum += i;
        if (i < n) {
            x += i;
        }
    }
    cycleSum *= n;
    return x * step + cycleSum;
}

if (require.main.path.includes('mocha')) {
    describe('Tests', () => {
        it('test', () => {
            const Test = require('chai').assert;
            let tests = [
                [1, 1],
                [13, 6253],
                [3, 63],
                [2, 16],
                [15, 9675],
                [12, 4896],
                [9, 2025],
            ];

            for (let [a, b] of tests) {
                Test.equal(findX(a), b, 'Wrong Value');
            }
        });
    });
} else {
    let tests = [
        // [1, 1],
        [13, 6253],
        [3, 63],
        // [2, 16],
        // [15, 9675],
        // [12, 4896],
        // [9, 2025],
    ];

    for (let [a, b] of tests) {
        console.log(findX(a), b);
    }
}
