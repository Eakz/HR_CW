// https://www.hackerrank.com/contests/projecteuler/challenges/euler004/problem

const larPal = n => {
    let largest = Number.MIN_SAFE_INTEGER;
    for (let i = Math.floor(n ** 0.5) + 1; i > 99; i--) {
        for (let j = Math.floor(n ** 0.5) - 10; j < 1000; j++) {
            let product = i * j;
            if (product < n && isPal(product)) {
                largest = largest < product ? product : largest;
            }
        }
    }
    return largest;
};

const isPal = n => n == n.toString().split("").reverse().join("");

console.log(larPal(101110), " === ", 101101);
console.log(larPal(101101), " === ", 99999);
console.log(larPal(800000), " === ", 793397);
