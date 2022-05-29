// https://www.codewars.com/kata/617ae98d26537f000e04a863/train/javascript

function toMountain(M = [[]]) {
    let pinnacle;
    const range = [-1, 0, 1];
    const dirRange = range.flatMap(y => range.map(x => [y, x]));

    while (true) {
        M.forEach((row, y) =>
            row.forEach((height, x) => {
                if (
                    (pinnacle?.height || 0) < height &&
                    dirRange.some(
                        ([dirY, dirX]) => height - M[y + dirY]?.[x + dirX] > 1,
                    )
                ) {
                    pinnacle = { height, y, x };
                }
            }),
        );

        if (pinnacle) {
            const targets = [{ y: pinnacle.y, x: pinnacle.x }];

            do {
                const cur = targets.shift();

                dirRange.forEach(([dirY, dirX]) => {
                    const curHeight = M[cur.y][cur.x];
                    const next = { y: cur.y + dirY, x: cur.x + dirX };

                    if (curHeight - M[next.y]?.[next.x] > 1) {
                        M[next.y][next.x] = curHeight - 1;
                        targets.push({ y: next.y, x: next.x });
                    }
                });
            } while (targets.length);

            pinnacle = null;
        } else break;
    }

    return M;
}

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('Example tests', () => {
        it('Fixed tests', () => {
            assert.deepStrictEqual(toMountain([[1]]), [[1]]);
            assert.deepStrictEqual(toMountain([[1, 1]]), [[1, 1]]);
            assert.deepStrictEqual(toMountain([[1, 2]]), [[1, 2]]);
            assert.deepStrictEqual(toMountain([[1, 3]]), [[2, 3]]);
            assert.deepStrictEqual(
                toMountain([
                    [2, 2, 1, 2],
                    [1, 0, 2, 1],
                    [1, 0, 1, 2],
                    [1, 2, 2, 1],
                ]),
                [
                    [2, 2, 1, 2],
                    [1, 1, 2, 1],
                    [1, 1, 1, 2],
                    [1, 2, 2, 1],
                ],
            );
            assert.deepStrictEqual(
                toMountain([
                    [2, 2, 1, 2],
                    [1, 0, 2, 1],
                    [1, 0, 1, 2],
                    [1, 2, 2, 4],
                ]),
                [
                    [2, 2, 1, 2],
                    [1, 2, 2, 2],
                    [1, 2, 3, 3],
                    [1, 2, 3, 4],
                ],
            );
            assert.deepStrictEqual(
                toMountain([
                    [2, 2, 1, 2],
                    [1, 0, 2, 1],
                    [1, 0, 4, 2],
                    [1, 2, 2, 4],
                ]),
                [
                    [2, 2, 2, 2],
                    [2, 3, 3, 3],
                    [2, 3, 4, 3],
                    [2, 3, 3, 4],
                ],
            );
            assert.deepStrictEqual(
                toMountain([
                    [1, 2, 4, 2],
                    [3, 3, 3, 4],
                    [1, 2, 4, 2],
                    [4, 4, 1, 3],
                ]),
                [
                    [2, 3, 4, 3],
                    [3, 3, 3, 4],
                    [3, 3, 4, 3],
                    [4, 4, 3, 3],
                ],
            );
        });
    });
}
