// https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

function getVillainName(birthday) {
    const m = [
        "Evil",
        "Vile",
        "Cruel",
        "Trashy",
        "Despicable",
        "Embarrassing",
        "Disreputable",
        "Atrocious",
        "Twirling",
        "Orange",
        "Terrifying",
        "Awkward",
    ];
    const d = [
        "Mustache",
        "Pickle",
        "Hood Ornament",
        "Raisin",
        "Recycling Bin",
        "Potato",
        "Tomato",
        "House Cat",
        "Teaspoon",
        "Laundry Basket",
    ];
    return `The ${m[birthday.getMonth()]} ${d[("0" + birthday.getDate()).slice(-1)]}`;
}

//may 3
console.log(
    getVillainName(new Date("May 3")),
    "The Despicable Raisin",
    "Expected result: The Despicable Raisin; Your result: " +
        getVillainName(new Date("May 13")),
);

//apr 1
console.log(
    getVillainName(new Date("April 21")),
    "The Trashy Pickle",
    "Expected result: The Trashy Pickle; Your result: " +
        getVillainName(new Date("April 21")),
);

//dec 7
console.log(
    getVillainName(new Date("December 17")),
    "The Awkward House Cat",
    "Expected result: The Awkward House Cat; Your result: " +
        getVillainName(new Date("December 17")),
);
