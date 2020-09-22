// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

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

// Complete the substrCount function below.
function* matchAll(s, rx) {
    let match;
    do {
        match = rx.exec(s);
        yield match;
        s = s.slice((match.index || 0) + 1);
    } while (match != null && s.length);
}

function substrCount(n, s = "") {
    return [
        ...new Set(
            Array.from(matchAll(s, new RegExp(/(?=((.?)\2*)(.?)\1)/g))).map(
                m => {
                    const part = Array.from(m).slice(1);
                    return part[0] ? part[0] + part[2] + part[0] : undefined;
                },
            ),
        ),
    ]
        .filter(x => x)
        .map(condition => s.match(new RegExp(`(?=${condition})`, "g")).length)
        .reduce((p, c) => p + c, s.length);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + "\n");

    ws.end();
}
