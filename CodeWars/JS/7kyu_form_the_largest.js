// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/javascript
const maxNumber = n => Number(n.toString().split("").sort().reverse().join(""));
console.log(maxNumber(213), " === ", 321);
console.log(maxNumber(7389), " === ", 9873);
console.log(maxNumber(63792), " === ", 97632);
console.log(maxNumber(566797), " === ", 977665);
console.log(maxNumber(1000000), " === ", 1000000);
