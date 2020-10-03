// https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, pr) {
    const p = Math.floor(pr / 2);
    const t = Math.floor(n / 2);
    return Math.min(p, t - p);
}
