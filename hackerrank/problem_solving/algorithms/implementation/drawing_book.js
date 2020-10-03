// https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
    const p = Math.floor(p / 2);
    const t = Math.floor(n / 2);
    return Math.min(p, t - p);
}
