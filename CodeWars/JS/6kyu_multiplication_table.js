// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

const multiplicationTable = n =>
    Array(n)
        .fill([...Array(n + 1).keys()].slice(1))
        .map((e, i) => e.map(e => e * (i + 1)));

console.log(multiplicationTable(3), " === ", [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
]);
