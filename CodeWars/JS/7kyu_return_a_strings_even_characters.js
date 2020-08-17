// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

const evenChars = s =>
    s.length > 1 && s.length <= 100
        ? [...s.split("").filter((e, i) => i % 2 !== 0)]
        : "invalid string";

console.log(evenChars("a"), "invalid string");
console.log(evenChars("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"]);
