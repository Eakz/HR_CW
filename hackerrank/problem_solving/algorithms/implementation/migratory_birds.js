// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    let birds = {};
    arr.forEach(e => {
        if (birds[e]) {
            birds[e] += 1;
        } else {
            birds[e] = 1;
        }
    });
    return Object.entries(birds).sort((a, b) => b[1] - a[1])[0][0];
}
