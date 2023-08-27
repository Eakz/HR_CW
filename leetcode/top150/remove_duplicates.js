/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return
    let i = 0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            nums[++i]=nums[j]
        }
        console.log(nums)
    }
    return i+1
};

const test = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(test), `Should be - ${[0,1,2,3,4,,,,,]}`)