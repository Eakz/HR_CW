/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const cache = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) cache.push(nums[i]);
    }
    const len = cache.length;
    for( let j=0; j<cache.length; j++){
        nums[j] = cache[j];
    }
    return len;
};


var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}