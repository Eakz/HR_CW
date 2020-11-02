// https://www.codewars.com/kata/5708c90cd531cdfecf00147c/train/javascript
const PRIMES = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
];

function slayAchilles(army) {
    let filtered = army.filter(x => !isPowerful(x) || isPerfect(x));
    return filtered;
}

function isPowerful(number) {
    let counters = [];
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i != 0) continue;
        let counter = 0;
        while (number % i == 0) {
            number = number / i;
            counter++;
        }
        counters.push(counter);
    }
    if (number != 1) counters.push(1);
    return !counters.includes(1);
}

function isPerfect(number) {
    if (number == 1) return true;
    for (let i1 = 2; i1 <= Math.ceil(Math.sqrt(number)); i1++) {
        let val1 = Math.log(number) / Math.log(i1);
        if (
            val1 - parseInt(val1) < 0.00000001 ||
            val1 - parseInt(val1) == 0.9999999999999996
        )
            return true;
    }
    return false;
}
console.log(slayAchilles([5, 10, 99, 107, 108, 120]), [5, 10, 99, 107, 120]);

console.log(slayAchilles([5, 8, 9, 10, 16, 27, 72, 99, 107, 121]), [
    5,
    8,
    9,
    10,
    16,
    27,
    99,
    107,
    121,
]);
