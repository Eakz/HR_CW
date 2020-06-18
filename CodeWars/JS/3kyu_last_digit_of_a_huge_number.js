// https://www.codewars.com/kata/5518a860a73e708c0a000027/train/javascript
const lastDigit = (arr) =>
    arr.reduceRight((a, b, i) => {
        let exponent = a < 4 ? a : (a % 4) + 4;

        let base = i === 0 ? b % 10 : b < 4 ? b : (b % 4) + 4;

        return Math.pow(base, exponent);
    }, 1) % 10;

// console.log(lastDigit([])); // 1);
// console.log(lastDigit([0, 0])); // 1); // 0 ^ 0
// console.log(lastDigit([0, 0, 0])); // 0); // 0^(0 ^ 0) = 0^1 = 0
// console.log(lastDigit([1, 2])); // 1 //);
// console.log(lastDigit([3, 4, 5])); // 1);
// console.log(lastDigit([4, 3, 6])); // 4);
// console.log(lastDigit([7, 6, 21])); // 1);
// console.log(lastDigit([12, 30, 21])); // 6);
// console.log(lastDigit([2, 2, 2, 0])); // 4);
// console.log(lastDigit([937640, 767456, 981242])); // 0);
// console.log(lastDigit([123232, 694022, 140249])); // 6);
console.log(lastDigit([499942, 898102, 846073])); // 6);

// var r1 = Math.floor(Math.random() * 100);
// var r2 = Math.floor(Math.random() * 10);

// console.log(lastDigit([])); // 1);
// console.log(lastDigit([r1])); // r1 % 10);
// console.log(lastDigit([r1, r2])); // Math.pow(r1 % 10, r2) % 10);
