const yearToCheck = 2020;
let start = new Date(yearToCheck, 0, 2);
const day = 60 * 60 * 1000 * 24;
console.log(start);
let result = new Array(12).fill(0);
while (start.getFullYear() !== yearToCheck + 1) {
    result[start.getMonth()]++;
    start = new Date(Date.parse(start) + day);
}

console.log(result);
console.log(result.reduce((acc, e) => acc + e) / 12);
