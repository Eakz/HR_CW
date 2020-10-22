// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

const findShort = s =>
    s
        .split(" ")
        .map(e => e.length)
        .sort((a, b) => a - b)[0];

console.log(
    findShort("bitcoin take over the world maybe who knows perhaps"),
    3,
);
console.log(
    findShort(
        "turns out random test cases are easier than writing out basic ones",
    ),
    3,
);
