// https://www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = arr => {
    let result = [0, 0, 0];
    arr.forEach(e => {
        switch (true) {
            case e > 0:
                result[0]++;
                break;
            case e < 0:
                result[1]++;
                break;
            default:
                result[2]++;
        }
    });
    result.forEach(e => {
        console.log((e / arr.length).toFixed(6));
    });
};
