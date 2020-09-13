// https://www.hackerrank.com/challenges/magic-square-forming/problem

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

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {}

function main() {
    var s = [];
    var min_cost = 45;
    var all_squares = [
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2],
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4],
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8],
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2],
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6],
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4],
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8],
        ],
    ];

    for (var i = 0; i < 3; i++) {
        s[i] = readLine().split(" ");
        s[i] = s[i].map(Number);
    }

    for (var k = 0; k < 8; k++) {
        var cost = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - all_squares[k][i][j]);
            }
        }
        if (min_cost > cost) {
            min_cost = cost;
        }
    }
    console.log(min_cost);
}
