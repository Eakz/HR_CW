// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
function processData(input) {
    let inputLines = input.split("\n");
    let count = Number(inputLines.shift());
    let phoneBook = inputLines
        .slice(0, count)
        .map(e => e.split(" "))
        .reduce((r, e) => {
            r[e[0]] = e[1];
            return r;
        }, {});
    let toCheck = inputLines.slice(count);
    for (let name of toCheck) {
        let entry = phoneBook[name];
        console.log(entry ? `${name}=${entry}` : "Not found");
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
