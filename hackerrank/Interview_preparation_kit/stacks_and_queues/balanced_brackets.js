// https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

// Funny but wrong solution (didn't see all testcases)
// const isBalanced = s =>
//     s
//         .slice(0, s.length / 2)
//         .replace(/[\[\(\{]/g, e =>
//             e === "{" ? "}" : e === "[" ? "]" : e === "(" ? ")" : "",
//         )
//         .split("")
//         .reverse()
//         .join("") === s.slice(s.length / 2)
//         ? "YES"
//         : "NO";

// Fun but wrong
// const isBalanced = s => {
//     const coRespondents = {
//         "{": "}",
//         "[": "]",
//         "(": ")",
//     };
//     for (let _ = 0; _ <= s.length; _++) {
//         if (s.slice(1).includes(coRespondents[s[0]])) {
//             s = s.slice(1).replace(coRespondents[s[0]], "");
//             console.log(s);
//         } else {
//             return "NO";
//         }
//     }
//     return s.length > 0 ? "NO" : "YES";
// };
const isBalanced = s => {
    let n;
    while (s.length != n) {
        n = s.length;
        s = s.replace("()", "");
        s = s.replace("[]", "");
        s = s.replace("{}", "");
    }
    if (s.length == 0) return "YES";
    else return "NO";
};
console.log(isBalanced("{[()]}"), "YES");
console.log(isBalanced("{[(])}"), "NO");
console.log(isBalanced("{{[[(())]]}}"), "YES");
console.log(isBalanced("{(([])[])[]}"), "YES");
console.log(isBalanced("{(([])[])[]]}"), "NO");
console.log(isBalanced("{(([])[])[]}[]"), "YES");
