// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s) {
    let cap = 0,
        subcap = 0;
    for (let i = 0; i < s.length; i++) {
        const targetLetter = s[i];
        if (targetLetter === targetLetter.toUpperCase()) cap++;
        if (targetLetter === targetLetter.toLowerCase()) subcap++;
    }
    return cap > subcap ? s.toUpperCase() : s.toLowerCase();
}
if (require.main.path.includes('mocha')) {
    const assert = require('chai').assert;

    describe('Basic tests', function () {
        it("solve('code') should return 'code'", function () {
            assert.strictEqual(solve('code'), 'code');
        });

        it("solve('CODe') should return 'CODE'", function () {
            assert.strictEqual(solve('CODe'), 'CODE');
        });

        it("solve('COde') should return 'code'", function () {
            assert.strictEqual(solve('COde'), 'code');
        });

        it("solve('Code') should return 'code'", function () {
            assert.strictEqual(solve('Code'), 'code');
        });
    });
} else {
    console.log(solve('code'), 'code');
    console.log(solve('CODe'), 'CODE');
    console.log(solve('COde'), 'code');
    console.log(solve('Code'), 'code');
}
