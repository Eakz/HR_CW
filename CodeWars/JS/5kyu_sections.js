// https://www.codewars.com/kata/5da1df6d8b0f6c0026e6d58d/train/javascript

const findSmallestDivisor = number => {
    const nSqrt = Math.sqrt(number);
    for (let i = 2; i <= nSqrt + 1; i++) {
        if (number % i === 0) return i;
        else if (i > nSqrt) return number;
    }
};

const c = k => {
    if (k === 1) return 1;

    let x = (k ** 0.5) ** 3;
    if (!Number.isInteger(k ** 0.5)) return 0;

    const divisors = {};
    let smallestDivisor = 2;

    while (x > 1) {
        if (x % smallestDivisor === 0) {
            divisors[smallestDivisor]
                ? (divisors[smallestDivisor] += 1)
                : (divisors[smallestDivisor] = 1);
            x /= smallestDivisor;
        } else {
            smallestDivisor = findSmallestDivisor(x);
        }
    }

    return Object.entries(divisors)
        .map(([key, value]) => value + 1)
        .reduce((prev, cur) => prev * cur);
};

console.log(c(1, 1));
console.log(c(4, 4));
console.log(c(4096576, 160));
console.log(c(2019, 0));
console.log(c(423128, 0));
console.log(c(1369, 4));
console.log(c(2999824, 28));
console.log(c(11710084, 64));
