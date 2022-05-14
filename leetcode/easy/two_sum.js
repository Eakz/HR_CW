/**
 * Given an array of integers nums and an integer target,
 *  return indices of the two numbers such that they add up to target.
 * 

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const numFiltered = nums.map((n, i) => ({ n, i }));
//     let numSorted = numFiltered.sort((a, b) => a.n - b.n);
//     while (numSorted.length) {
//         const [curNum, ...rest] = numSorted;
//         for (let i = 0; i < rest.length; i++) {
//             if (curNum.n + rest[i].n === target) {
//                 return [curNum.i, rest[i].i];
//             }
//         }
//         numSorted = numSorted.slice(1);
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (n, t) => {
    for (let i = 0; i < n.length; i++) {
        const num = n[i];
        const otherNum = t - num;
        const otherNumIndex = n.indexOf(otherNum);
        if (otherNumIndex !== -1&&otherNumIndex!==i) {
            return [i, otherNumIndex];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [0,1]
