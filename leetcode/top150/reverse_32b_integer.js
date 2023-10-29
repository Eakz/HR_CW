// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if(!this.maxInt && !this.minInt){
        const maxInt = Math.pow(2,31);
        const minInt = -1*maxInt;
        this.maxInt=maxInt;
        this.minInt=minInt;
    }
    const sign = x < 0 ? '-' : '';
    const reversed = parseInt(sign + `${x}`.split('').reverse().join(''));
    return reversed<=this.maxInt && reversed>=this.minInt && (reversed|0===reversed)?reversed:0
};

console.log(reverse(123), 321);
console.log(reverse(1534236469), 0);
console.log(Number.MAX_SAFE_INTEGER)
