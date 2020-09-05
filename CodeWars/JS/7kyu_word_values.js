// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

const wordValue = a => [...a.map((e, i) => wordSum(e) * (i + 1))];
const wordSum = w => {
    w = w
        .split("")
        .filter(e => {
            const isAlpha = new RegExp(/[A-Za-z]/);
            return isAlpha.test(e);
        })
        .map(l => l.toUpperCase().charCodeAt() - 64);
    return w.length > 0 ? w.reduce((acc, e) => acc + e) : 0;
};
console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);
console.log(wordSum(""));
