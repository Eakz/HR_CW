// https://www.hackerrank.com/challenges/30-nested-logic/problem
const dateDif = (s, f) => {
    let yD = s[2] - f[2];
    let mD = s[1] - f[1];
    let dD = s[0] - f[0];

    switch (true) {
        case yD > 0:
            return 10000;
        case mD > 0 && yD == 0:
            return 500 * mD;
        case dD > 0 && yD == 0 && mD == 0:
            return 15 * dD;
        default:
            return 0;
    }
};

function processData(input) {
    let [s, f] = input.split("\n").map(e => e.split(" ").map(e => Number(e)));
    console.log(dateDif(s, f));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
