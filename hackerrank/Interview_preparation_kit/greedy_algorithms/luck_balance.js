// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

const luckBalance = (k, c) => {
    const unimportant = c.filter(e => e[1] === 0);
    const important = c.filter(e => e[1] === 1).sort((p, n) => n[0] - p[0]);
    const ked = important.slice(0, k);
    const lost = important.slice(k);
    let pos = 0;
    let neg = 0;
    unimportant.concat(ked).forEach(e => {
        if (e.length > 1) {
            pos += e[0];
        }
    });
    lost.forEach(e => {
        if (e.length > 1) {
            neg += e[0];
        }
    });
    return pos - neg;
};
console.log(
    luckBalance(3, [
        [5, 1],
        [2, 1],
        [1, 1],
        [8, 1],
        [10, 0],
        [5, 0],
    ]),
    " === ",
    29,
);
console.log(
    luckBalance(5, [
        [13, 1],

        [10, 1],

        [9, 1],

        [8, 1],

        [13, 1],

        [12, 1],

        [18, 1],

        [13, 1],
    ]),
    " === ",
    42,
);
