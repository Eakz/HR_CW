// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

const cost = mins => mins<=65?30:Math.ceil((mins-65)/30)*10+30
  
  
console.log(cost(45)," - should be - ",30);
console.log(cost(63)," - should be - ",30);
console.log(cost(84)," - should be - ",40);
console.log(cost(102)," - should be - ",50);
console.log(cost(273)," - should be - ",100);
