// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

const grow = x=>x.reduce((acc,e)=>acc*e)
console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 
