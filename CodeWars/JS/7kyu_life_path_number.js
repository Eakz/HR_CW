// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript
// Stright forward solution
const lifePathNumber = d => {
    const lastDigit = s => {
        while (s.length > 1) {
            s = Array.isArray(s) ? s : s.split("");
            s = s.reduce((acc, e) => Number(acc) + Number(e)).toString();
        }
        return s;
    };
    return Number(lastDigit(d.split("-").map(e => lastDigit(e))));
};
// Elegant solution
function lifePathNumber(dateOfBirth) {
    return dateOfBirth.replace(/\D/g, "") % 9 || 9;
}
console.log(lifePathNumber("1879-03-14"), 6);
console.log(lifePathNumber("1815-12-10"), 1);
console.log(lifePathNumber("1961-07-04"), 1);
console.log(lifePathNumber("1955-10-28"), 4);
console.log(lifePathNumber("1452-04-15"), 4);
console.log(lifePathNumber("1791-12-26"), 2);
console.log(lifePathNumber("1906-12-09"), 1);
console.log(lifePathNumber("1912-06-23"), 6);
console.log(lifePathNumber("1950-08-11"), 7);
console.log(lifePathNumber("1956-01-31"), 8);
console.log(lifePathNumber("1965-04-14"), 3);
console.log(lifePathNumber("1971-06-28"), 7);
