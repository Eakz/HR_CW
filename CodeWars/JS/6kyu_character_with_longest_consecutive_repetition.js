// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

const longestRepetition = s => {
    let cons = s.length > 0 ? [s[0], 1] : ["", 0];
    let temp = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            temp++;
        } else {
            temp = 1;
        }
        if (temp > cons[1]) {
            cons = [s[i - 1], temp];
        }
    }
    return cons;
};

console.log(longestRepetition("aaaabb"), " === ", ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), " === ", ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), " === ", ["u", 3]);
console.log(longestRepetition("abbbbb"), " === ", ["b", 5]);
console.log(longestRepetition("aabb"), " === ", ["a", 2]);
console.log(longestRepetition(""), " === ", ["", 0]);
console.log(longestRepetition("ba"), " === ", ["b", 1]);
