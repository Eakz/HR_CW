// https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year) {
    let yearFormatted = new Date(Date.parse((year = year)));
    let fridays = 0;
    while (yearFormatted.getFullYear() === year) {
        if (yearFormatted.getDay() == 5 && yearFormatted.getDate() == 13) {
            fridays++;
        }
        yearFormatted = new Date(yearFormatted.getTime() + 1000 * 60 * 60 * 24);
    }
    return fridays;
}
function unluckyDays(year) {
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) {
            unlucky++;
        }
    }
    return unlucky;
}
console.log(unluckyDays(1586)); // should be: 1");
console.log(unluckyDays(1001)); // should be: 3");
console.log(unluckyDays(2819)); // should be: 2");
console.log(unluckyDays(2792)); // should be: 2");
console.log(unluckyDays(2723)); // should be: 2");
console.log(unluckyDays(1909)); // should be: 1");
console.log(unluckyDays(1812)); // should be: 2");
console.log(unluckyDays(1618)); // should be: 2");
console.log(unluckyDays(2132)); // should be: 1");
console.log(unluckyDays(2065)); // should be: 3");
