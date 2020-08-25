// https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem

function main() {
    let t = parseInt(readLine());
    for (let a0 = 0; a0 < t; a0++) {
        var n = BigInt(readLine());
        let totalEven = 0n;
        let prev = 1n;
        let curr = 1n;
        while (curr <= n) {
            if (curr % 2n === 0n) {
                totalEven += curr;
            }
            [prev, curr] = [curr, curr + prev];
        }
        console.log(totalEven.toString());
    }
}
