// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/typescript

export const quarterOf = (month: number): number => Math.ceil(month / 3);

console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);
