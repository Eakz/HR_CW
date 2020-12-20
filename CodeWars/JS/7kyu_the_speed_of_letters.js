// https://www.codewars.com/kata/5fc7caa854783c002196f2cb/train/javascript

const speedify = s => {
    const list = Array(150).fill(" ");
    [...s].forEach((e, i) => {
        list[e.charCodeAt() - 65 + i] = e;
    });
    return list.join("").trimEnd();
};
const cases = [
    ["AZ", "A                         Z"],
    ["ABC", "A B C"],
    ["ACE", "A  C  E"],
    ["CBA", "  A"],
    ["HELLOWORLD", "     E H    DLL   OLO   R  W"],
];

cases.forEach(c => {
    console.log(speedify(c[0]), c[1]);
});
