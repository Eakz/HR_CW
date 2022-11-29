// https://www.codewars.com/kata/637d1d6303109e000e0a3116/train/javascript

function findMatchedByPattern(pattern) {
    return function (string) {
        let patternIdx = 0;
        for (const char of string) {
            if (patternIdx === pattern.length) break;
            else if (char === pattern[patternIdx]) patternIdx++;
            else if (pattern.indexOf(char, patternIdx) !== -1) return false;
        }
        return patternIdx === pattern.length;
    };
}
if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Example tests', () => {
        it('Should work for this', () => {
            const predicate = findMatchedByPattern('acs');
            assert.strictEqual(
                predicate('access'),
                true,
                "'access' is a word that matched pattern 'acs'",
            );
            assert.strictEqual(
                predicate('sacrifice'),
                false,
                "'sacrifice' is not a word that matched pattern 'acs'",
            );
        });
    });
} else {
    // console.log(findMatchedByPattern('acs')('access'), true);
    // console.log(findMatchedByPattern('acs')('sacrifice'), false);
    console.log(findMatchedByPattern('tde')('traded'), true);
}
