// https://www.hackerrank.com/contests/projecteuler/challenges/euler005/problem

const smallMultiple = n => {
    let divisible = false;
    let start = 0;
    while (!divisible) {
        start += n;
        for (let i = 1; i <= n; i++) {
            if (start % i === 0) {
                divisible = true;
            } else {
                divisible = false;
                break;
            }
        }
    }
    return start;
};
