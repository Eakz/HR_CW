// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
// Option 1
const generateRange = (min, max, step) =>
    min > max ? [] : [min, ...generateRange(min + step, max, step)];
// Option 2
const generateRange = (min, max, step) =>
    [...Array(((max - min) / step + 1) | 0)].map((_, i) => min + i * step);
// Option 3 (lazy MOFO option)
const ld = require("lodash");
const generateRange = (mn, mx, s) => ld.range(mn, mx + 1, s);

// Test
console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
