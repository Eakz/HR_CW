// https://www.hackerrank.com/challenges/candies/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

function candies(n, a) {
    const c = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        if (a[i + 1] > a[i]) {
            c[i + 1] = c[i] + 1;
        }
    }
    for (let i = n; i > 0; i--) {
        if (a[i - 1] > a[i] && c[i - 1] <= c[i]) {
            c[i - 1] = c[i] + 1;
        }
    }
    return c.reduce((acc, e) => acc + e);
}

// console.log(candies(3, [1, 2, 2]), 4);
// console.log(candies(8, [2, 4, 3, 5, 2, 6, 4, 5]), 12);
console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]), 19);
