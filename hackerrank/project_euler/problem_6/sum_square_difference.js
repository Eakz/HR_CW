// https://www.hackerrank.com/contests/projecteuler/challenges/euler006/problem

const sumSqDif = n =>
    [...Array(n + 1).keys()].reduce((acc, e) => acc + e) ** 2 -
    (n * (n + 1) * (2 * n + 1)) / 6;

console.log(sumSqDif(3), " === ", 22);
console.log(sumSqDif(10), " === ", 2640);
