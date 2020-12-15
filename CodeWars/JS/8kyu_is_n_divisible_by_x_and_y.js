// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4), false);
console.log(isDivisible(48, 3, 4), true);
