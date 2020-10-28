// https://www.hackerrank.com/challenges/utopian-tree/problem

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", _ => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the utopianTree function below.

// Solution #1
const utopianTree = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result += i % 2 === 0 ? 1 : result;
    }
    return result;
};
// Solution #2
const utopianTree = n =>
    [...Array(n + 1).keys()]
        .slice(1)
        .reduce((acc, e) => (acc += e % 2 === 0 ? 1 : acc), 1);
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        ws.write(result + "\n");
    }

    ws.end();
}
