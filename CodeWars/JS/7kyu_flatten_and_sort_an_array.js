// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

// Option 1
function flattenAndSort(array = []) {
    return array.flatMap(e => e).sort((a, b) => a - b);
}
// Option 2
const flattenAndSort = a => a.reduce((a, c) => [...a, ...c], []).sort((a, b) => a - b);

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
