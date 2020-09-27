function processData(input) {
    const inSpl = input.split("\n");
    return inSpl
        .slice(1)
        .map(e => BigInt(e))
        .reduce((a, b) => a + b)
        .toString()
        .slice(0, 10);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    console.log(processData(_input));
});
