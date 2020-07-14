// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    // base case for recursion
    if(p0 >= p) {
      return 0;
    } else {
    // recursive call with increment
      return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
    }
  }

console.log(nbYear(1500, 5, 100, 5000)); // 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94);
