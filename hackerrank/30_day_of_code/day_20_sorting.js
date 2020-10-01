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
const bubbleSort = a => {
    let countSwaps = 0;
    let wasSwapped = true;
    while (wasSwapped) {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                [a[i], a[i + 1]] = [a[i + 1], a[i]];
                countSwaps++;
                wasSwapped = true;
                break;
            } else {
                wasSwapped = false;
            }
        }
    }
    console.log(`Array is sorted in ${countSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
    // Made return just for the function to be
    return a;
};

function main() {
    var n = parseInt(readLine());
    a = readLine().split(" ");
    a = a.map(Number);
    bubbleSort(a);
    // Write Your Code Here
}
