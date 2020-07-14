// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
    let odd = 0;
    let even = 0;
    // Declaring the type of Array - odd || even
    for (let i = 0; i < integers.length; i++) {
        integers[i] % 2 === 0 ? even++ : odd++;
        if (odd >= 2 || even >= 2) {
            break;
        }
    }
    // Linear search for the first match with type declared above
    for (let i = 0; i < integers.length; i++) {
        if (odd >= 2 ? integers[i] % 2 === 0 : integers[i] % 2 !== 0) {
            return integers[i];
        }
    }
}

console.log(findOutlier([0, 1, 2])); // 1)
console.log(findOutlier([1, 2, 3])); // 2)
console.log(findOutlier([2, 6, 8, 10, 3])); // 3)
console.log(findOutlier([0, 0, 3, 0, 0])); // 3)
console.log(findOutlier([1, 1, 0, 1, 1])); // 0)
