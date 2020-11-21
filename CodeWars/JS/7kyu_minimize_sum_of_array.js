// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

const minSum = arr => {
    let sum = 0;
    arr = arr.sort((a, b) => a - b);
    do {
        sum += arr.shift() * arr.pop();
    } while (arr.length > 0);
    return sum;
};
const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
