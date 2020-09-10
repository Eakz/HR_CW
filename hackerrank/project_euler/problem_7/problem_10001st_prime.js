// https://www.hackerrank.com/contests/projecteuler/challenges/euler007/problem
const isPrime = n => {
    if (n < 2) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i < n ** 0.5 + 1; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
const nthPrime = n => {
    let i = 2;
    let result = [];
    while (result.length < n) {
        if (isPrime(i)) {
            result.push(i);
        }
        i++;
    }
    return result.slice(-1)[0];
};
