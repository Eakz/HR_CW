// https://www.hackerrank.com/challenges/staircase/problem

const staircase = n => {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
    return ""; // for cosmetic reasons for Node not to return undefined
    // from console.log(staircase(n)) as last line
};

console.log(staircase(6));
console.log(staircase(4));
