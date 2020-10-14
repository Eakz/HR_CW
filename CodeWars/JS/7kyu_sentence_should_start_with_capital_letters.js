// https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

const fix = p =>
    p
        .split(". ")
        .map(e => e.slice(0, 1).toUpperCase() + e.slice(1))
        .join(". ");

// const fix = s => s.replace(/^\w|\.\s\w/g, x => x.toUpperCase());
console.log(fix(""), "");
console.log(fix("hi."), "Hi.");
console.log(
    fix(
        "hello. my name is inigo montoya. you killed my father. prepare to die.",
    ),
    "Hello. My name is inigo montoya. You killed my father. Prepare to die.",
);
