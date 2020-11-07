// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript

// True uniq elemets wise
// const solve = a => {
//     let duplicates = {};
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             if (a[i][j] in duplicates) {
//                 a[i].splice(j, 1);
//             } else {
//                 duplicates[a[i][j]] = true;
//             }
//         }
//     }
//     return a.map(e=>e.length).reduce((acc,e)=>acc*e);
// };

// Required solution
const solve = a => a.map(e => [...new Set(e)].length).reduce((acc, e) => acc * e);

console.log(solve([[1, 2], [4], [5, 6]]), " === ", 4);
console.log(
    solve([
        [1, 2],
        [4, 4],
        [5, 6, 6],
    ]),
    " === ",
    4,
);
console.log(
    solve([
        [1, 2],
        [3, 4],
        [5, 6],
    ]),
    " === ",
    8,
);
console.log(
    solve([
        [1, 2, 3],
        [3, 4, 6, 6, 7],
        [8, 9, 10, 12, 5, 6],
    ]),
    " === ",
    72,
);
