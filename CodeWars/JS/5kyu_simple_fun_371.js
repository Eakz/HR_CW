// https://www.codewars.com/kata/59f14f8ea41dfd7e6c0000fd/train/javascript

// Straight forward solution - timedOUT

// const fourSum = (A, B, C, D) => {
//     let result = 0;
//     [A,B,C,D]=[new Set(A),new Set(B),new Set(C), new Set(D)];
//     for (a of A) {
//         for (b of B) {
//             for (c of C) {
//                 for (d of D) {
//                     if (a + b + c + d === 0) {
//                         result++;
//                     }
//                 }
//             }
//         }
//     }
//     return result;
// };

// perfomance solution
const fourSum = (A, B, C, D) => {
    let result = 0;
    [A, B, C, D] = [new Set(A), new Set(B), new Set(C), new Set(D)];
    let [fst, scnd] = [{}, {}];
    for (a of A) for (b of B) fst[(b += a)] = fst[b] ? 1 + fst[b] : 1;
    for (c of C) for (d of D) scnd[(d = -c - d)] = scnd[d] ? 1 + scnd[d] : 1;
    for (u in fst) result += u in scnd && fst[u] * scnd[u];
    return result;
};
console.log(
    fourSum(
        [-45, -41, -36, -36, 26, -32],
        [22, -27, 53, 30, 38, -54],
        [42, 56, -37, -75, -10, -6],
        [-16, 30, 77, -46, 62, 45],
    ),
); //5)

console.log(fourSum([1, 2], [2, 2], [3, 3], [-6, -6])); //1)

console.log(fourSum([1, -2], [2, 5], [3, 2], [-6, -6])); //2)
