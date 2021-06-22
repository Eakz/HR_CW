// https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

function typeOfTriangle(a, b, c) {
    if ([a, b, c].some(isNaN) || (a + b <= c) || (a + c <= b) || (b + c <= a))
      return "Not a valid triangle";
    if (a == b && b == c) return "Equilateral";
    if (a == b || b == c || a == c) return "Isosceles";
    return "Scalene";
  }

console.log(typeOfTriangle(1,1,1), "Equilateral");
console.log(typeOfTriangle(3,2,4), "Scalene");
console.log(typeOfTriangle(2,2,1), "Isosceles");
console.log(typeOfTriangle('.',5,82), "Not a valid triangle");
