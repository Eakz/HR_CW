// https://www.hackerrank.com/challenges/between-two-sets/problem
const getTotalX = (a, b) => {
    let count = 0;
    for (let x = 1; x <= 100; x++) {
        if (a.every(v => x % v == 0)) {
            if (b.every(v => v % x == 0)) {
                count++;
            }
        }
    }

    return count;
};
