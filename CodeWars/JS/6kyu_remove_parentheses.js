// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

const removeParentheses = s =>
    /\({1}[^()]*[\)]{1}/gi.test(s)
        ? removeParentheses(s.replace(/\({1}[^()]*[\)]{1}/gi, ""))
        : s;
console.log(removeParentheses("example(unwanted thing)example"), "exampleexample");
console.log(removeParentheses("example (unwanted thing) example"), "example  example");
console.log(removeParentheses("a (bc d)e"), "a e");
console.log(removeParentheses("a(b(c))"), "a");
console.log(
    removeParentheses("hello example (words(more words) here) something"),
    "hello example  something",
);
console.log(
    removeParentheses("(first group)44(second group)44(third group)"),
    "====",
    "4444",
);
