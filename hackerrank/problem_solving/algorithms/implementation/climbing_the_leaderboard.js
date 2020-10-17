// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

// function climbingLeaderboard(scores, alice) {
//     let result = [];
//     alice.forEach(s => {
//         let position = 1;
//         for (let i = 0; i < scores.length; i++) {
//             if (i === 0) {
//                 if (s >= scores[i]) {
//                     break;
//                 }
//             } else {
//                 if (scores[i - 1] === scores[i]) {
//                 } else {
//                     position++;
//                 }
//                 if (s >= scores[i]) {
//                     break;
//                 } else if (s < scores[i] && i === scores.length - 1) {
//                     position++;
//                 }
//             }
//         }

//         result.push(position);
//     });
//     return result;
// }

function climbingLeaderboard(scores, alice) {
    const results = Array(alice.length);
    let rank = 1;
    for (let i = 0, j = alice.length - 1; j >= 0; j--) {
        for (; scores[i] > alice[j]; i++) {
            if (scores[i] > scores[i + 1] || i === scores.length - 1) rank++;
        }
        results[j] = rank;
    }
    return results;
}

const climbingLeaderboard = (s, a) => {
    let refS = [...new Set(s)];
    let start = refS.length - 1;
    let finish = 0;
    let positions = {};
    let pointer = 0;
    let sA = a.sort((a, b) => a - b);
    for (let i = start; i >= finish; i--) {
        while (refS[i] > sA[pointer]) {
            positions[sA[pointer]] = i + 2;
            if (pointer < a.length) {
                pointer++;
            }
        }
        if (sA[pointer] > refS[finish]) {
            positions[sA[pointer]] = 1;
        }
    }
    return a.map(e => positions[e]);
};
console.log(
    climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]),
    "6 4 2 1",
);
