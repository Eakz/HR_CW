// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    const lowerCased = str.toLowerCase();
    for (const c of lowerCased) {
        if (vowels.has(c)) count++;
    }
    return count
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Vowels Count Tests', function () {
        it("should return 5 for 'abracadabra'", function () {
            assert.strictEqual(getCount('abracadabra'), 5);
        });
    });
} else {
    console.log(getCount('abracadabra'), 5);
}
