// https://www.codewars.com/kata/5ac5e9aa3853da25d9000102/train/javascript

const orArrays = (a, b, j = 0) => {
    return a.map((x, i) => x | (b[i] || j)).concat(b.slice(a.length).map(x => x | j));
};
console.log(orArrays([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
console.log(orArrays([1, 2, 3], [4, 5, 6]), [5, 7, 7]);
console.log(orArrays([1, 2, 3], [1, 2]), [1, 2, 3]);
console.log(orArrays([1, 2], [1, 2, 3]), [1, 2, 3]);
console.log(orArrays([1, 2, 3], [1, 2, 3], 3), [1, 2, 3]);
