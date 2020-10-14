// https://www.codewars.com/kata/5c511d8877c0070e2c195faf/train/javascript

function validate(username, password) {
    const len = Math.ceil(Math.min(username.length / 2, password.length / 2));
    let dictOfSeq = username
        .split("")
        .map((_, i) => username.slice(i, len + i))
        .filter(s => s.length == len);
    return len == 0 ? false : !dictOfSeq.some(seq => password.includes(seq));
}
// console.log(validate("", ""), false);
// console.log(validate("username", "myname"), false);
// console.log(validate("bcef", "abcd"), false);
// console.log(validate("ad", "ab"), false);
console.log(validate("a", "A"), true);
// console.log(validate("sword", "password"), false);
// console.log(validate("qwertyuiop", "asdfghjkl"), true);
// console.log(validate("MASH", "M*A*S*H"), true);
// console.log(validate("asdfghjkl", "lkjhgfdsa"), true);
