// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < m; i++) sum += s[i];
    if (sum === d) count++;
    for (let i = m, j = 0; i < s.length; i++) {
        sum -= s[j];
        sum += s[i];
        j++;
        if (sum === d) count++;
    }
    return count;
}
