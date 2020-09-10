// https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function compareTriplets(a, b) {
    let f = 0,
        s = 0;
    a.forEach((e, i) => {
        switch (true) {
            case e > b[i]:
                f++;
                break;
            case e < b[i]:
                s++;
                break;
            default:
                break;
        }
    });
    return [f, s];
}
