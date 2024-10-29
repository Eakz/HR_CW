const removeDuplicates = (nums: number[]): number => {
    let j: number = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i];
        }
        console.log(i, nums);
    }

    return j;
};

const a = [1, 1, 2, 2, 3, 5];
removeDuplicates(a);
console.log(a);
