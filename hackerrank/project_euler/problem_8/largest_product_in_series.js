// https://www.hackerrank.com/contests/projecteuler/challenges/euler008/problem

const maxProd = (num, n, k) => {
    const numList = [...num.split("").map(e => Number(e))];
    let prod = [];
    for (let i = 0; i < numList.length - k; i++) {
        prod.push(numList.slice(i, i + k).reduce((acc, e) => acc * e));
    }
    return Math.max(...prod);
};
