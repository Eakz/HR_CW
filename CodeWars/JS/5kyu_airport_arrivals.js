// https://www.codewars.com/kata/57feb00f08d102352400026e

var flapDisplay = function (lines, rotors) {
    const order = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';
    const result = [];
    for (let i = 0; i < lines.length; i++) {
        const currentWord = lines[i];
        let resultingWord = '';
        let sumTurns = 0;
        for (let j = 0; j < rotors[i].length; j++) {
            const currentTurns = rotors[i][j];
            const indexOfCurrentLetter = order.indexOf(currentWord[j]);
            resultingWord += order.at(
                (indexOfCurrentLetter + currentTurns + sumTurns) % order.length,
            );
            sumTurns += currentTurns;
        }
        result.push(resultingWord);
    }
    return result;
};

const Test = require('@codewars/test-compat');
var BEFORE = function (a) {
    console.log('Before:\n', a);
    return a;
};

var AFTER = function (a) {
    console.log('After:\n', a);
    return a;
};

describe('TestCases', function () {
    it('example', function () {
        // CAT => DOG
        var before = BEFORE(['CAT']);
        var rotors = [[1, 13, 27]];
        var after = AFTER(flapDisplay(before, rotors));
        var expected = ['DOG'];
        Test.assertDeepEquals(after, expected);
    });

    it('basic', function () {
        // HELLO => WORLD!
        var before = BEFORE(['HELLO ']);
        var rotors = [[15, 49, 50, 48, 43, 13]];
        var after = AFTER(flapDisplay(before, rotors));
        var expected = ['WORLD!'];
        Test.assertDeepEquals(after, expected);

        // CODE => WARS
        var before = BEFORE(['CODE']);
        var rotors = [[20, 20, 28, 0]];
        var after = AFTER(flapDisplay(before, rotors));
        var expected = ['WARS'];
        Test.assertDeepEquals(after, expected);
    });
});
