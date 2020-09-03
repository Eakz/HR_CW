// https://www.hackerrank.com/contests/projecteuler/challenges/euler003/problem

const largestPrimeFactor = n => {
    let a = 2;

    while (a <= Math.floor(Math.sqrt(n))) {
        if (n % a === 0) {
            n /= a;
        } else {
            a++;
        }
    }
    return n;
};
