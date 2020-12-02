// https://www.codewars.com/kata/58a5aeb893b79949eb0000f1/train/javascript

const sharedBits = (a, b) => {
    const toB = n => ("0".repeat(20) + n.toString(2)).split("").reverse();
    [a, b] = [toB(a), toB(b)];
    let count = 0;
    for (let i = 0; i < 20; i++) {
        if (i > 20) {
            return false;
        }
        if (a[i] === "1" && b[i] === "1") {
            count++;
        }
        if (count >= 2) {
            return true;
        }
    }
    return false;
};

const TESTS = [
    [1, 2, false],
    [16, 8, false],
    [1, 1, false],
    [2, 3, false],
    [7, 10, false],
    [43, 77, true],
    [7, 15, true],
    [23, 7, true],
];

TESTS.forEach(([a, b, c]) =>
    console.log(sharedBits(a, b), c, `sharedBits(${a}, ${b}) should be equal ${c}`),
);
