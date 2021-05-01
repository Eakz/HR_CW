// https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript
const gridMap = (f, a) => {
    return a.map(e => (Array.isArray(e) ? gridMap(f, e) : f(e)));
};

console.log(gridMap(x => x + 1, [1, [2, 34, 5], [1, [2, 3]]]));
const { assert, config } = require("chai");
config.truncateThreshold = 0;

const numberGrid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 2, 4],
];
assert.deepEqual(
    gridMap(x => x + 1, numberGrid),
    [
        [2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [1, 3, 5],
    ],
    "for x => x+1, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]",
);
assert.deepEqual(
    gridMap(x => x * 2, numberGrid),
    [
        [2, 4, 6, 8],
        [10, 12, 14, 16, 18],
        [0, 4, 8],
    ],
    "for x => x*2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]",
);
assert.deepEqual(
    gridMap(x => x ** 2, numberGrid),
    [
        [1, 4, 9, 16],
        [25, 36, 49, 64, 81],
        [0, 4, 16],
    ],
    "for x => x**2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]",
);
const charGrid = [
    ["H", "e", "l", "l", "o"],
    ["W", "o", "r", "l", "d", "!"],
];
assert.deepEqual(
    gridMap(x => x.toUpperCase(), charGrid),
    [
        ["H", "E", "L", "L", "O"],
        ["W", "O", "R", "L", "D", "!"],
    ],
    "for x => x.toUpperCase(), [ ['H','e','l','l','o'], ['W','o','r','l','d','!'] ]",
);
assert.deepEqual(
    gridMap(x => x.toLowerCase(), charGrid),
    [
        ["h", "e", "l", "l", "o"],
        ["w", "o", "r", "l", "d", "!"],
    ],
    "for x => x.toLowerCase(), [ ['H','e','l','l','o'], ['W','o','r','l','d','!'] ]",
);
