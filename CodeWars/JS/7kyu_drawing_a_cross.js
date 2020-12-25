// https://www.codewars.com/kata/5a036ecb2b651d696f00007c/train/javascript

const drawACross = n => {
    if (n < 3) return "Not possible to draw cross for grids less than 3x3!";
    if (n % 2 === 0) return "Centered cross not possible!";
    const line = n => Array(n).fill(" ");
    let result = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let curLine = line(n);
        curLine[i] = "x";
        curLine[n - 1 - i] = "x";
        result.push(curLine.join(""));
    }
    let middle = line(n);
    middle[Math.floor(n / 2)] = "x";
    middle = middle.join("");
    return [...result, middle, ...result.reverse()].join("\n");
};

console.log(
    drawACross(7),
    "\n",
    "x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x",
    "Should draw a centered cross in a grid of height and width n!",
);
// console.log(
//     drawACross(15),
//     "x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x",
//     "Should draw a centered cross in a grid of height and width n!",
// );
// console.log(
//     drawACross(25),
//     "x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x",
//     "Should draw a centered cross in a grid of height and width n!",
// );
// console.log(
//     drawACross(6),
//     "Centered cross not possible!",
//     "If a centred cross is not possible, display the correct error message!",
// );
// console.log(
//     drawACross(10),
//     "Centered cross not possible!",
//     "If a centred cross is not possible, display the correct error message!",
// );
// console.log(
//     drawACross(2),
//     "Not possible to draw cross for grids less than 3x3!",
//     "Numbers less than three should return the correct error message",
// );
