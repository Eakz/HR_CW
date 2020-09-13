// https://www.hackerrank.com/challenges/mini-max-sum/problem

const miniMaxSum = arr => {
    arr.sort((a, b) => a - b);
    let max = arr.slice(1).reduce((acc, e) => acc + e);
    let min = arr.slice(0, -1).reduce((acc, e) => acc + e);
    console.log(min, max);
};
