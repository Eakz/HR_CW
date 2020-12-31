// https://www.codewars.com/kata/59e77930233243a7b7000026/train/javascript
// Straight forward solution
amaroPlan = n => [
    n * 20 - Math.floor(n % 2 ? n / 2 : n / 2 - 1),
    ...[...Array(n - 1).keys()].map(i => (i % 2 === 1 ? 1 : 0)),
];
// More elegant solution
const amaroPlan = n =>
    Array.from({ length: n }, (_, i) => (i ? (i & 1) ^ 1 : n * 20 - ((n - 1) >> 1)));
console.log(amaroPlan(2), [40, 0]);
console.log(amaroPlan(3), [59, 0, 1]);
console.log(amaroPlan(4), [79, 0, 1, 0]);
console.log(amaroPlan(5), [98, 0, 1, 0, 1]);
