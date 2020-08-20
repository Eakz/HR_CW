// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

// const minimumAbsoluteDifference = arr => {
//     let diff = Infinity;
//     arr.forEach((e, i1) =>
//         arr.forEach((e2, i2) => {
//             let sub = Math.abs(e - e2);
//             if (diff > sub && i1 !== i2) {
//                 diff = sub;
//             }
//         }),
//     );
//     return diff;
// };
//efficient version bubble comparison of a sorted array
const minimumAbsoluteDifference = arr => {
    let diff = Infinity;
    arr = arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        let sub = Math.abs(arr[i] - arr[i - 1]);
        if (diff > sub) {
            diff = sub;
        }
    }
    return diff;
};
// Test cases
console.log(minimumAbsoluteDifference([3, -7, 0]), " === ", 3);
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]), " === ", 3);
console.log(
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]),
    " === ",
    1,
);
