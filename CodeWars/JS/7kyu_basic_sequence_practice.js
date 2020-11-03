// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

const sumOfN = n =>
    [...Array(Math.abs(n) + 1).keys()]
        .map(e =>
            e > 0 ? [...Array(Math.abs(e) + 1).keys()].reduce((acc, e) => acc + e) : 0,
        )
        .map(e => (n < 0 && e !== 0 ? e * -1 : e));

console.log(sumOfN(3), " === ", [0, 1, 3, 6]);
console.log(sumOfN(-4), " === ", [0, -1, -3, -6, -10]);
console.log(sumOfN(1), " === ", [0, 1]);
console.log(sumOfN(-6), " === ", [0, -1, -3, -6, -10, -15, -21]);
