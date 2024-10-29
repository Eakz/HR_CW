// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

var runLengthEncoding = function (str) {
    return [...str].reduce(
        (acc, e) => {
            const accCopy = [...acc];
            if (accCopy[acc.length - 1]?.[1] === e) {
                accCopy[acc.length - 1][0] += 1;
            } else {
                accCopy.push([1,e]);
            }
            return accCopy;
        },

        [],
    );
};

if (require.main.path.includes('mocha')) {
    const assert = require('chai').assert;

    var randomString = function (n) {
        var i,
            s = '';
        for (i = 0; i < n; ++i)
            s += new Array((Math.random() * 5 + 1) | 0).join(
                String.fromCharCode((Math.random() * 26 + 'A'.charCodeAt(0)) | 0),
            );
        return s;
    };

    describe('runLengthEncoding', function () {
        it('should work for some examples', function () {
            assert.deepEqual(runLengthEncoding(''), []);
            assert.deepEqual(runLengthEncoding('abc'), [
                [1, 'a'],
                [1, 'b'],
                [1, 'c'],
            ]);
            assert.deepEqual(runLengthEncoding('aab'), [
                [2, 'a'],
                [1, 'b'],
            ]);
            assert.deepEqual(runLengthEncoding('hello world!'), [
                [1, 'h'],
                [1, 'e'],
                [2, 'l'],
                [1, 'o'],
                [1, ' '],
                [1, 'w'],
                [1, 'o'],
                [1, 'r'],
                [1, 'l'],
                [1, 'd'],
                [1, '!'],
            ]);
            assert.deepEqual(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'), [
                [34, 'a'],
                [3, 'b'],
            ]);
            assert.deepEqual(
                runLengthEncoding(
                    'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW',
                ),
                [
                    [12, 'W'],
                    [1, 'B'],
                    [12, 'W'],
                    [3, 'B'],
                    [24, 'W'],
                    [1, 'B'],
                    [14, 'W'],
                ],
            );
        });
    });
    describe('inverse operations', function () {
        it('should return the original string', function () {
            var i,
                inversRLE = function (arr) {
                    return arr.reduce(function (p, e) {
                        return (p += new Array(e[0] + 1).join(e[1]));
                    }, '');
                },
                s;
            for (i = 0; i < 100; ++i) {
                s = randomString(20);
                assert.strictEqual(inversRLE(runLengthEncoding(s)), s);
            }
        });
    });
} else {
    console.log(runLengthEncoding('aab'), [
        [2, 'a'],
        [1, 'b'],
    ]);
}
