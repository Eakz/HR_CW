// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

const hello = name =>
    `Hello, ${
        name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
    }!`;
``;

console.log(
    hello("johN"),
    "Hello, John!",
    "returns 'Hello, John!' when given 'johN'",
);
console.log(
    hello("alice"),
    "Hello, Alice!",
    "returns 'Hello, Alice!' when given 'alice'",
);
console.log(
    hello(),
    "Hello, World!",
    "returns 'Hello, World!' when name is not given",
);
console.log(
    hello(""),
    "Hello, World!",
    "returns 'Hello, World!' when name is an empty String",
);
