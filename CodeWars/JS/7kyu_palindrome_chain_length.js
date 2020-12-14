// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

palindromeChainLength = (n, s = 0) => {
    const rev = Number(n.toString().split("").reverse().join(""));
    if (n === rev) {
        return s;
    }
    return palindromeChainLength(rev + n, s + 1);
};

console.log(palindromeChainLength(1), 0);
console.log(palindromeChainLength(88), 0);
console.log(palindromeChainLength(87), 4);
console.log(palindromeChainLength(89), 24);
console.log(palindromeChainLength(10), 1);
