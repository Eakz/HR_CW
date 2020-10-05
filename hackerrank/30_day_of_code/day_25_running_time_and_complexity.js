// https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem
const isPrime = n => {
    if (n < 2) {
        return "Not prime";
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return "Not prime";
        }
    }
    return "Prime";
};
function processData(input) {
    let [count, ...data] = input.split("\n");
    for (let i = 0; i < count; i++) {
        console.log(isPrime(Number(data[i])));
    }
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
