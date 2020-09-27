// https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript

// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
const gridIndex = (g, i) => {
    let gI = 1;
    const translate = {};
    for (let a = 0; a < g.length; a++) {
        for (let sa = 0; sa < g.length; sa++) {
            if (i.includes(gI)) {
                translate[gI] = g[a][sa];
            }
            gI++;
        }
    }
    return i.map(e => translate[e]).join("");
};

// Solution from Oscar GG
// Totally forgot about flat method
const gridIndex = (grid, indices) =>
    indices.map(c => grid.flat(2)[c - 1]).join("");
