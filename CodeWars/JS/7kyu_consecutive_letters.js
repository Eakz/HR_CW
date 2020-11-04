// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

const sol = s =>
    s
        .split("")
        .sort()
        .every((e, i) => {
            return i === 0
                ? true
                : e.charCodeAt() - s.split("").sort()[i - 1].charCodeAt() === 1;
        });
console.log(sol("abc"), true);
console.log(sol("abd"), false);
console.log(sol("dabc"), true);
console.log(sol("abbc"), false);
