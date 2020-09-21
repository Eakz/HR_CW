// https://www.hackerrank.com/challenges/30-2d-arrays/problem
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

const maxHGlass = a => {
    let hG = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let hTop = a[i].slice(j, j + 3);
            let hMid = a[i + 1][j + 1];
            let hBot = a[i + 2].slice(j, j + 3);
            // console.log(hTop,hMid,hBot)
            let sumHG = [...hTop, ...hBot, hMid].reduce((a, b) => a + b);
            hG.push(sumHG);
        }
    }
    return Math.max(...hG);
};

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(" ")
            .map(arrTemp => parseInt(arrTemp, 10));
    }
    console.log(maxHGlass(arr));
}
