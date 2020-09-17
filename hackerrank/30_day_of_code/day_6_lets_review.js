// https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
    let even = "",
        odd = "";
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            even += input[i];
        } else {
            odd += input[i];
        }
    }
    console.log(`${even} ${odd}`);
    return;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    for (i of _input.split("\n").slice(1)) processData(i);
});
