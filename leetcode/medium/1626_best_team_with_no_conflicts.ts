// https://leetcode.com/problems/best-team-with-no-conflicts/
type TBestTeamScore = (scores: number[], ages: number[]) => number;

const bestTeamScore: TBestTeamScore = (scores, ages) => {
    const ageScoreCorrelation = ages.map((age, index) => [age, scores[index]]);
    const sortedASCor = ageScoreCorrelation.sort((a, b) =>
        a[0] === b[0] ? a[1] - b[1] : a[0] - b[0],
    );
    let result = 0;

    const teamR: number[] = sortedASCor.reduce((acc, e) => {
        const current = e[1];
        acc.push(current);
        result = Math.max(result, e[1]);
        return acc;
    }, []);

    for (let i = 0; i < sortedASCor.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (sortedASCor[i][1] >= sortedASCor[j][1]) {
                teamR[i] = Math.max(teamR[i], sortedASCor[i][1] + teamR[j]);
            }
        }
        result = Math.max(result, teamR[i]);
    }

    return result;
};

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]), 34); // 34
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]), 16); // 16
