// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript
const whatCentury = y =>
    (((Number(y) - 1) / 100 + 1) | 0) +
    (y[0] === "1" || y.slice(-2) === "00"
        ? "th"
        : y[1] === "0"
        ? "st"
        : y[1] === "1"
        ? "nd"
        : y[1] === "2"
        ? "rd"
        : "th");

console.log(whatCentury("1999"), " === ", "20th");
console.log(whatCentury("2011"), " === ", "21st");
console.log(whatCentury("2154"), " === ", "22nd");
console.log(whatCentury("2259"), " === ", "23rd");
console.log(whatCentury("1234"), " === ", "13th");
console.log(whatCentury("1023"), " === ", "11th");
console.log(whatCentury("2000"), " === ", "20th");
