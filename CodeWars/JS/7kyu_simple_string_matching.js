// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript
const solve = (a, b) => new RegExp(`^${a.replace("*", ".*")}$`).test(b);

console.log(solve("code*s", "codewars"), " === ", true);
console.log(solve("codewar*s", "codewars"), " === ", true);
console.log(solve("code*warrior", "codewars"), " === ", false);
console.log(solve("c", "c"), " === ", true);
console.log(solve("*s", "codewars"), " === ", true);
console.log(solve("*s", "s"), " === ", true);
console.log(solve("s*", "s"), " === ", true);
console.log(solve("aa", "aaa"), " === ", false);
console.log(solve("aa*", "aaa"), " === ", true);
console.log(solve("aaa", "aa"), " === ", false);
console.log(solve("aaa*", "aa"), " === ", false);
console.log(solve("*", "codewars"), " === ", true);
