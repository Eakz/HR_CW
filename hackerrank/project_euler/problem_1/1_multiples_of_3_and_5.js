// https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
    input_stdin += data;
});

process.stdin.on("end", function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
const multiples= (n)=>{
    n--;
    let mul3 = Math.floor(n / 3)
    let mul5 = Math.floor(n / 5)
    let mul15 = Math.floor(n / 15)
    let sum = Math.floor((3 * mul3 * (mul3 + 1) / 2)
           + Math.floor(5 * mul5 * (mul5 + 1) / 2)
           - Math.floor(15 * mul15 * (mul15 + 1) / 2))
    return sum
};
function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(multiples(n))
    }
}
