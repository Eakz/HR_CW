// https://www.hackerrank.com/challenges/ctci-big-o/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous
const primality = n => {
    if (n < 2) {
        return "Not prime";
    }
    for (let i = 2; i < n ** 0.5 + 1; i++) {
        if (n / i === Math.round(n / i) && n !== i) {
            return "Not prime";
        }
    }
    return "Prime";
};

console.log(primality(2), "p");
console.log(primality(7), "p");
console.log(primality(13), "p");
console.log(primality(1982), "np");
console.log(primality(14582734), "np");
console.log(primality(9891), "np");
