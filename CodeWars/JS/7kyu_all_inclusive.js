// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
    const defaultStr = strng + strng;
    for (let i = 0; i < strng.length; i++) {
        const currentWord = defaultStr.slice(i, i + strng.length);
        if (!arr.includes(currentWord)) {
            return false;
        }
    }

    return true;
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    function testing(actual, expected) {
        Test.equal(actual, expected);
    }

    describe('Basic tests', function () {
        it('containAllRots', function () {
            testing(containAllRots('', []), true);
            testing(containAllRots('', ['bsjq', 'qbsj']), true);
            testing(
                containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']),
                true,
            );
            testing(
                containAllRots('XjYABhR', [
                    'TzYxlgfnhf',
                    'yqVAuoLjMLy',
                    'BhRXjYA',
                    'YABhRXj',
                    'hRXjYAB',
                    'jYABhRX',
                    'XjYABhR',
                    'ABhRXjY',
                ]),
                false,
            );
        });
    });
}
