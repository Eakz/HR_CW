// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// for fun
// const birthdayCakeCandles = candles =>
//     candles.filter(e => e === Math.max(...candles)).length;

// O(N**2)
const birthdayCakeCandles = c => {
    c = c.sort((a, b) => a - b);
    let count = 1;
    for (let i = c.length - 1; i >= 0; i--) {
        if (c[i - 1] === c[i]) {
            count++;
        } else {
            return count;
        }
    }
};
