// https://www.codewars.com/kata/59f7fc109f0e86d705000043

function divisibleByThree(str) {
    return [...str].reduce((s, d) => +d + s, 0) % 3 === 0;
}

console.log(divisibleByThree("123")); // true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree("19254")); // true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree("88")); // false, "Should return false if the sum of the given digits is not divisible by 3.")
console.log(divisibleByThree("1")); // false, "Should return false if the sum of the given digits is not divisible by 3.")
console.log([...'abc']);