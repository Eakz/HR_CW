// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
const breakingRecords = s => {
    let min = s[0],
        max = s[0],
        result = [0, 0];
    s = s.slice(1);
    for (let sc of s) {
        if (sc > max) {
            result[0]++;
            max = sc;
        } else if (sc < min) {
            result[1]++;
            min = sc;
        }
    }
    return result;
};
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine()
        .split(" ")
        .map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
