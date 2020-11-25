// https://www.codewars.com/kata/5fad2310ff1ef6003291a951/train/javascript

const weights = a => a.map((_, i) => (i & 1 ? -a[i - 1] : a[i + 1]));

console.log(weights([1, 2, 3, 4, 5, 6]));
console.log(weights([-13, 52]));
console.log(weights([-1, 1]));
console.log(weights([2, 2, 2, 2]));
console.log(weights([2, 7, 3, 11, 5, 23, 47, 3]));
console.log(weights([-1, 100, -100, 1]));
console.log(weights([1, 1, 1, -2]));
console.log(weights([-2, 1, 1, 1]));
