// https://www.hackerrank.com/interview/interview-preparation-kit/strings/challenges
function commonChild(s1, s2) {
    let arr = [Array(s2.length + 1).fill(0)];
    [...s1].forEach((v1, i) => {
        arr[i + 1] = [0];
        [...s2].forEach((v2, j) => {
            arr[i + 1][j + 1] =
                v1 === v2
                    ? arr[i][j] + 1
                    : Math.max(arr[i + 1][j], arr[i][j + 1]);
        });
    });
    return arr[s2.length][s1.length];
}
