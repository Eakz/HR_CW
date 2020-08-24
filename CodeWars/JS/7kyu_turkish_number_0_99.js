// https://www.codewars.com/kata/5ebd53ea50d0680031190b96/train/javascript

const turkish_ones = {
    0: "sıfır",
    1: "bir",
    2: "iki",
    3: "üç",
    4: "dört",
    5: "beş",
    6: "altı",
    7: "yedi",
    8: "sekiz",
    9: "dokuz",
};
const turkish_tens = {
    1: "on",
    2: "yirmi",
    3: "otuz",
    4: "kırk",
    5: "elli",
    6: "altmış",
    7: "yetmiş",
    8: "seksen",
    9: "doksan",
};
const getTurkishNumber = num => {
    const fWord = num > 9 ? turkish_tens[Math.floor(num / 10)] : "";
    const sWord =
        (num % 10 !== 0 && num / 10 > 1) || num / 10 < 1
            ? turkish_ones[num % 10]
            : "";
    return `${fWord}${fWord && sWord ? " " : ""}${sWord}`;
};

const tests = [
    [0, "sıfır"],
    [16, "on altı"],
    [70, "yetmiş"],
    [26, "yirmi altı"],
];

tests.forEach(([t, a]) => {
    console.log(getTurkishNumber(t), " === ", a);
});
