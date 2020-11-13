// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript
const minimumSteps = (a, k) =>
    a
        .sort((a, b) => a - b)
        .reduce(
            (acc, e) => {
                if (acc.sum + e >= k) {
                    return acc;
                }
                return { count: acc.count + 1, sum: acc.sum + e };
            },
            { count: 0, sum: 0 },
        ).count;
// Alternative solution
const minimumSteps = (a, k) =>
    a.sort((a, b) => a - b).filter((e, i) => (k = k - e) > 0).length;

console.log(minimumSteps([4, 6, 3], 7), " === ", 1);
console.log(minimumSteps([10, 9, 9, 8], 17), " === ", 1);
console.log(minimumSteps([8, 9, 10, 4, 2], 23), " === ", 3);
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), " === ", 8);
console.log(minimumSteps([4, 6, 3], 2), " === ", 0);
