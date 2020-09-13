// https://www.hackerrank.com/challenges/kangaroo/problem
const kangaroo = (x1, v1, x2, v2) =>
    (x1 - x2) % (v2 - v1) === 0 ? "YES" : "NO";
