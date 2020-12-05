export const seven = (m: number, c = 0): number[] => {
    if (m.toString().length < 3) return [m, c];
    return seven(Number(m.toString().slice(0, -1)) - (m % 10) * 2, c + 1);
};

console.log(seven(1021), [10, 2]);
console.log(seven(477557101), [28, 7]);
console.log(seven(1603), [7, 2]);
console.log(seven(371), [35, 1]);
