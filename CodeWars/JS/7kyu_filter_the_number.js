// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function(value='') {
    return Number(value.replace(/\D/g,''))
  }


console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
