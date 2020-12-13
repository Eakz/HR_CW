// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
const sum = a => (a.length > 0 ? a.reduce((acc, e) => acc + e) : 0);

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
