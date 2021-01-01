// https://www.codewars.com/kata/5f5da7a415fbdc0001ae3c69/train/javascript
const isInMiddle = s =>
    s.length <= 4 ? s.includes("abc") : isInMiddle(s.slice(1, -1));

console.log(isInMiddle("AAabcBB"), " === ", true);
console.log(isInMiddle("AabcBB"), " === ", true);
console.log(isInMiddle("AabcBBB"), " === ", false);
console.log(isInMiddle("AAAabcBB"), " === ", true);
