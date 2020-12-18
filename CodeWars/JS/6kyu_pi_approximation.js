// https://www.codewars.com/kata/550527b108b86f700000073f/train/javascript

const iterPi = e => {
    let [res, i] = [0, 0];
    for (; Math.abs(Math.PI / 4 - res) > e / 4; i++)
        res += (i % 2 ? -1 : 1) / (1 + 2 * i);
    return [i, +(res * 4).toFixed(10)];
};
console.log(iterPi(0.1), [10, 3.0418396189]);
console.log(iterPi(0.01), [100, 3.1315929036]);
