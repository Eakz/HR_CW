// https://www.codewars.com/kata/5e297e9f63f1db003317cbac/train/javascript

function paintTiles(costs) {
    return Math.min(...costs.reduce((minCosts, row) =>
      row.map((r, i) => Math.min(...minCosts.map((c, j) => (i === j ? Infinity : r + c)))),
      Array(4).fill(0))
    );
  }
if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Basic tests', function () {
        it('Simple tests', function () {
            const costs1 = [
                [1, 3, 4, 5],
                [2, 3, 2, 3],
                [3, 1, 4, 1],
                [2, 3, 1, 3],
            ];
            const costs2 = [
                [2, 10, 4, 1],
                [10, 7, 10, 3],
                [6, 7, 10, 7],
                [9, 7, 6, 10],
                [4, 2, 7, 10],
                [9, 4, 1, 5],
            ];

            assert.strictEqual(paintTiles(costs1), 5);
            assert.strictEqual(paintTiles(costs2), 20);
        });
    });
} else {
    const costs1 = [
        [1, 3, 4, 5],
        [2, 3, 2, 3],
        [3, 1, 4, 1],
        [2, 3, 1, 3],
    ];
    const costs2 = [
        [2, 10, 4, 1],
        [10, 7, 10, 3],
        [6, 7, 10, 7],
        [9, 7, 6, 10],
        [4, 2, 7, 10],
        [9, 4, 1, 5],
    ];

    console.log(paintTiles(costs1), 5);
    console.log(paintTiles(costs2), 20);
}
