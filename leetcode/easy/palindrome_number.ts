// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
    return `${x}`===`${x}`.split('').reverse().join('')
};

// Tests
console.log(isPalindrome(121), true) 
console.log(isPalindrome(-121), false) 