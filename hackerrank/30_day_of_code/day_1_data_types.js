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

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    // Declare second integer, double, and String variables.
    var i2 = Number(readLine());
    var d2 = parseFloat(readLine());
    var s2 = readLine();

    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(i + i2);
    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1)); // This is total BS but required for the test.
    // The thing is that JS saves all numbers as float as default, thats why precision point is hidden when it's equal to 0.0
    // Concatenate and print the String variables on a new line
    console.log(s + s2);
    // The 's' variable above should be printed first.
}
