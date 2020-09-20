// https://www.hackerrank.com/challenges/30-binary-numbers/problem
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

const binMax = n =>
    n
        .toString(2)
        .split("0")
        .sort((a, b) => b.length - a.length)[0].length;

function main() {
    const n = parseInt(readLine(), 10);
    console.log(binMax(n));
}
