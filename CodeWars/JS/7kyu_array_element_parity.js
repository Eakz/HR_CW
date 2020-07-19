// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

const solve = (arr) => arr.filter((e) => !arr.includes(e * -1))[0];

console.log(solve([1, -1, 2, -2, 3])); //3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2])); //-4);
console.log(solve([1, -1, 2, -2, 3, 3])); //3);
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); //-38);
console.log(solve([-9, -105, -9, -9, -9, -9, 105])); //-9);
