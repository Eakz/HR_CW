// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
    return [...Array(num+1).keys()].reduce((acc,e)=>acc+e)
  }

console.log(summation(1), 1)
console.log(summation(8), 36)
