// https://www.codewars.com/kata/58ce8725c835848ad6000007/train/javascript

const potatoes = (p0, w0, p1) => Math.floor((w0 * 100 - w0 * p0) / (100 - p1));

console.log(potatoes(82, 127, 80)); // 114);
console.log(potatoes(93, 129, 91)); // 100);
