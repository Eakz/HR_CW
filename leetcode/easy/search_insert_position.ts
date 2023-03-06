// https://leetcode.com/problems/search-insert-position/

// function searchInsert(nums: number[], target: number): number {
//     let start = 0, end = nums.length-1;
//     while(start<=end) {
//         let mid = Math.floor((start+end)/2);
//         if(nums[mid]===target) return mid;
//         // Check edge cases
//         else if (nums[mid]>target && mid===0) return 0;
//         else if (nums[mid]<target && mid ===nums.length-1) return nums.length;
//         // Check for neigbors
//         else if(nums[mid-1]<target&&nums[mid]>target) return mid;
//         else if(nums[mid]<target&&nums[mid+1]>target) return mid+1;
        
//         else if(nums[mid] <target) start = mid+1;
//         else end = mid -1;
//     }
//     return 0
// };

var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};

console.log(searchInsert([1,3,5,6], 5), 2)
console.log(searchInsert([1,3,5,6], 2), 1)
console.log(searchInsert([1,3,5,6], 7), 4)
console.log(searchInsert([1,3,5,6], 0), 0)
console.log(searchInsert([1,3,5,7], 6), 3)
console.log(searchInsert([1], 0), 0)