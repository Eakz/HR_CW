// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

const averages =a=>a?a.map((e,i)=>i!=a.length-1&&(a[i]+a[i+1])/2).slice(0,-1):[]


console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
