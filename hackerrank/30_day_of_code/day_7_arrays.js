// https://www.hackerrank.com/challenges/30-arrays/problem
"use strict";

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

const solution = a => a.reverse().join(" ");

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine()
        .split(" ")
        .map(arrTemp => parseInt(arrTemp, 10));
    console.log(solution(arr));
}
