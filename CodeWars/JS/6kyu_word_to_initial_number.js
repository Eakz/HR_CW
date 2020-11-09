// https://www.codewars.com/kata/5bb148b840196d1be50000b1/train/javascript

const convert = s => {
    const dict = {};
    [...new Set(s.toLowerCase())].forEach((e, i) => {
        i = i === 0 ? 1 : i === 1 ? 0 : i;
        dict[e] = dict[e] ? dict[e] : i;
    });
    return Number(
        s
            .toLowerCase()
            .split("")
            .map(e => dict[e])
            .join(""),
    );
};

console.log(convert("CodeWars"), " === ", 10234567);
console.log(convert("KATA"), " === ", 1020);
