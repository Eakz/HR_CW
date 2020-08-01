// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

const solve = (str) => {
    const spaces = str
        .split("")
        .map((e, i) => (e === " " ? i : null))
        .filter((a) => a);
    str = str.split(" ").join("").split("").reverse();
    spaces.forEach((e) => str.splice(e, 0, " "));
    return str.join("");
};
console.log(solve("codewars"), "srawedoc");
console.log(solve("your code"), "edoc ruoy");
console.log(solve("your code rocks"), "skco redo cruoy");
console.log(solve("i love codewars"), "s rawe docevoli");
