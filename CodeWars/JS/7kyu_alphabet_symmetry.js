// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
const solve = a => [
    ...a.map(e =>
        e
            .toLowerCase()
            .split("")
            .map((e, i) => Number(e.charCodeAt() - 97 === i))
            .reduce((acc, e) => acc + e, 0),
    ),
];
console.log(solve(["abode", "ABc", "xyzD"]), " === ", [4, 3, 1]);
console.log(solve(["abide", "ABc", "xyz"]), " === ", [4, 3, 0]);
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), " === ", [6, 5, 7]);
console.log(solve(["encode", "abc", "xyzD", "ABmD"]), " === ", [1, 3, 1, 3]);
