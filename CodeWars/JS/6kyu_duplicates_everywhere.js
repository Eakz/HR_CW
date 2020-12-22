// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/train/javascript

const removeDuplicateIds = obj => {
    const list = {};
    Object.keys(obj).forEach(e =>
        obj[e].forEach(
            el =>
                (list[el] = !list[el] ? e : Number(list[el]) < Number(e) ? e : list[el]),
        ),
    );
    Object.keys(obj).forEach(
        e => (obj[e] = [...[...new Set(obj[e])].filter(fe => list[fe] == e)]),
    );
    return obj;
};

// Same shit just reduced
const removeDuplicateIds = o => {
    var i = Object.keys(o).reduce(
        (i, k) => ((o[k] = [...new Set(o[k])]).forEach(v => (i[v] = k)), i),
        {},
    );
    return Object.keys(o).reduce((o, k) => ((o[k] = o[k].filter(v => k == i[v])), o), o);
};
const obj = {
    1: ["A", "B", "C"],
    2: ["A", "B", "D", "A"],
};
const result = removeDuplicateIds(obj);

const obj1 = {
    1: ["C", "F", "G"],
    2: ["A", "B", "C"],
    3: ["A", "B", "D"],
};
const result1 = removeDuplicateIds(obj1);

const obj2 = {
    1: ["A"],
    2: ["A"],
    3: ["A"],
};
const result2 = removeDuplicateIds(obj2);

const obj3 = {
    432: ["A", "A", "B", "D"],
    53: ["L", "G", "B", "C"],
    236: ["L", "A", "X", "G", "H", "X"],
    11: ["P", "R", "S", "D"],
};
const result3 = removeDuplicateIds(obj3);

// console.log(result, { 1: ["C"], 2: ["A", "B", "D"] });
// console.log(result1, { 1: ["F", "G"], 2: ["C"], 3: ["A", "B", "D"] });
console.log(result2, { 1: [], 2: [], 3: ["A"] });
// console.log(result3, {
//     11: ["P", "R", "S"],
//     53: ["C"],
//     236: ["L", "X", "G", "H"],
//     432: ["A", "B", "D"],
// });
