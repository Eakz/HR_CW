// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// Slow solution

// function activityNotifications(expenditure, d) {
//     let notif = 0;
//     let head = expenditure.slice(0, d);
//     let tail = expenditure.slice(d);
//     while (tail.length > 0) {
//         let next = tail.shift();
//         if (median(head) * 2 <= next) {
//             notif++;
//         }
//         head.push(next);
//     }
//     return notif;
// }
// const median = l => {
//     l = l.sort((a, b) => a - b);
//     if (l.length % 2 === 0) {
//         let middle = l.length / 2;
//         let f = Math.floor(middle);
//         let s = f + 1;
//         return (l[f] + l[s]) / 2;
//     } else {
//         return l[Math.floor(l.length / 2)];
//     }
// };

// Modified solution

function activityNotifications(expenditure, d) {
    let notif = 0;

    let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
    let m1, m2;
    let cs = new Array(201).fill(0);
    for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++;
    for (let i = d, l = expenditure.length; i < l; i++) {
        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
        let m = (m1 + m2) / 2;
        if (expenditure[i] >= m * 2) notif++;
        cs[expenditure[i - d]]--;
        cs[expenditure[i]]++;
    }

    return notif;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5), " === ", 2);
