// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

const killer = (s, d) =>
    Object.keys(s).filter(e => d.every(v => s[e].includes(v)))[0];

console.log(
    killer(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"],
        },
        ["Lucas", "Bill"],
    ),
    " === ",
    "James",
);

console.log(
    killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]),
    " === ",
    "Megan",
);
