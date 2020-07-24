// https://www.codewars.com/kata/5b752a42b11814b09c00005d/train/javascript

// Recursive option
const solve = (a, b) => {
    if (a === 0 || b === 0) {
        return [a, b];
    }
    if (a >= 2 * b) {
        a %= 2 * b;
    } else if (b >= 2 * a) {
        b %= 2 * a;
    } else {
        return [a, b];
    }
    return solve(a, b);
};

// Non-Recursive option
const solve = (a, b) => {
    while (a !== 0 && b !== 0) {
        if (a >= 2 * b) {
            a %= 2 * b;
        } else if (b >= 2 * a) {
            b %= 2 * a;
        } else {
            return [a, b];
        }
    }
    return [a, b];
};

// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].

console.log(solve(6, 19)); //[6,7]);
console.log(solve(2, 1)); //[0,1]);
console.log(solve(22, 5)); //[0,1]);
console.log(solve(2, 10)); //[2,2]);
