// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

// Fun version with OOP algo
const repeats = a => {
    let temp = Array(Math.max(...a)).fill(0);
    a.forEach(e => (temp[e] = temp[e] ? 0 : e));
    return temp.reduce((acc, e) => acc + e);
};

// Simple use of both sides methods
function repeats(arr) {
    return arr
        .filter(v => arr.indexOf(v) === arr.lastIndexOf(v))
        .reduce((a, b) => a + b, 0);
}
console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
