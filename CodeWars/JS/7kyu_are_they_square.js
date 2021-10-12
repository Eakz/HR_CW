// https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

var isSquare = (a)=>a.length?a.every(e=>(e**0.5|0)===e**0.5):undefined;


 
console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false); 
    