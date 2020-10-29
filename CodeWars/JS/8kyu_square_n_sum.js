// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

const squareSum = a =>
    a.length > 0 ? a.map(e => e ** 2).reduce((acc, e) => acc + e) : 0;
console.log(squareSum([1, 2]), " === ", 5);
console.log(squareSum([0, 3, 4, 5]), " === ", 50);
