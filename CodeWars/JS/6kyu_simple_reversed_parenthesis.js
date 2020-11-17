// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040/train/javascript

const solve = s => {
    while (s.includes("()")) {
        s = s.replace(/\(\)/g, "");
    }
    if (s.length % 2 === 1) return -1;
    let count = 0;
    const obj = {
        ")(": 2,
        "((": 1,
        "))": 1,
    };
    for (let i = 0; i <= s.length - 2; i += 2) {
        count += obj[s[i] + s[i + 1]];
    }
    return count;
};
console.log(solve(")()("), 2);
console.log(solve("((()"), 1);
console.log(solve("((("), -1);
console.log(solve("())((("), 3);
console.log(solve("())()))))()()("), 4);
