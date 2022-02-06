// https://www.codewars.com/kata/5919f3bf6589022915000023/train/javascript

/**
 * 3x3 matrix swap
 * [0,0]->[0,2]
 * [0,1]->[1,2]
 * [0,2]->[2,2]
 * [1,0]->[0,1]
 * [1,1]->[1,1]
 * [1,2]->[2,1]
 * [2,0]->[0,0]
 * [2,1]->[1,0]
 * [2,2]->[2,0]
 *
 */

const rotateM = m => {
    const size = m.length;
    const newArray = Array.from(m).map(_ => Array(size).fill(null));
    const moduleSize = n => Math.abs(size - n - 1);
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            newArray[moduleSize(y)][x] = m[x][y];
        }
    }
    return newArray;
};
function rotateAgainstClockwise(matrix, times) {
    times = times % 4;
    for (let i = 0; i < times; i++) {
        matrix = rotateM(matrix);
    }
    console.log(times);
    return matrix;
}

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            // Example tests

            // -- different 'times' on a 2x2 matrix
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    1,
                ),
                [
                    [2, 4],
                    [1, 3],
                ],
            );
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    2,
                ),
                [
                    [4, 3],
                    [2, 1],
                ],
            );
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    3,
                ),
                [
                    [3, 1],
                    [4, 2],
                ],
            );
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    4,
                ),
                [
                    [1, 2],
                    [3, 4],
                ],
            );

            // -- 'times' > 4
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    5,
                ),
                [
                    [2, 4],
                    [1, 3],
                ],
            );

            // -- greater matrix
            Test.deepEqual(
                rotateAgainstClockwise(
                    [
                        [1, 2, 3, 4],
                        [5, 6, 7, 8],
                        [9, 10, 11, 12],
                        [13, 14, 15, 16],
                    ],
                    2,
                ),
                [
                    [16, 15, 14, 13],
                    [12, 11, 10, 9],
                    [8, 7, 6, 5],
                    [4, 3, 2, 1],
                ],
            );
        });
    });
}
