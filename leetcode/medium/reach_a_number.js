// var reachNumber = function (target) {
//     let [pointer, moves] = [0, 1]
//     while (pointer !== target) {
//         if (pointer === target) {
//             return moves
//         }
//         if (pointer > target && pointer - moves === target) {

//             pointer -= moves

//         } else if (pointer > target&&pointer-moves>target) {
//             pointer -= moves
//         }
//         else {
//             pointer += moves;
//         }

//         moves++;
//     }
//     return moves
// };

var reachNumber = function (target) {
    let c = 0;
    target=Math.abs(target)
    while (0 < target) {
        target -= ++c
    }
    return target % 2 == 0 ? c : c + 1 + c % 2
}
console.log(reachNumber(3))