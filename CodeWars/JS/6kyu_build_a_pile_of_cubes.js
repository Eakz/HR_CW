// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

const findNb = (m, n = 0, a = 0) => {
    if (n > m) return -1;
    if (n === m) return a - 1;
    return findNb(m, n + a ** 3, ++a);
};

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
