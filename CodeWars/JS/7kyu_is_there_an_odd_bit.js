// https://www.codewars.com/kata/5d6f49d85e45290016bf4718/train/

function anyOdd(x) {
    let binary = (x) => ("0" + new String((x >>> 0).toString(2))).split("");
    let position = 0;
    binary = binary(x);
    for (let i = binary.length - 1; i > 0; i--) {
        if (position % 2 != 0 && binary[i] == "1") {
            return 1;
        }
        position++;
    }
    return 0;
}

const MATCH = parseInt("10".repeat(16), 2);

function anyOdd(x) {
    return !!(x & MATCH) * 1;
}

console.log(anyOdd(2));
2863311530;
console.log(anyOdd(2863311530)); // 1);
console.log(anyOdd(5));
console.log(anyOdd(128)); // 1);
console.log(anyOdd(131)); // 1);
console.log(anyOdd(2)); // 1);
console.log(anyOdd(24082)); // 1);
console.log(anyOdd(0)); // 0);
console.log(anyOdd(85)); // 0);
// console.log(anyOdd(1024)); // 0);
// console.log(anyOdd(1)); // 0);
// console.log(anyOdd(1365)); // 0);
