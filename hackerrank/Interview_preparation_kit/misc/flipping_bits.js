// https://www.hackerrank.com/challenges/flipping-bits/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous

function flippingBits(N) {
    let bin = N.toString(2);
    bin = "0".repeat(32 - bin.length) + bin;
    return parseInt(
        bin
            .split("")
            .map(e => (e === "0" ? "1" : "0"))
            .join(""),
        2,
    );
}
