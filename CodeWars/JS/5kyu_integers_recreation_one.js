// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
// const divisors = [...Array(i+1).keys()].slice(1).filter(e=>i%e===0); very slow DONT USE FOR LARGE NUMBERS

function listSquared(m, n) {
    const results = [];
    const getDivs = n => {
        const divs = [];
        for (let j = 1; j <= n; j++) {
            if (!(n % j)) {
                divs.push(j);
            }
        }
        return divs;
    };
    for (let i = m; i <= n; i++) {
        const divisors = getDivs(i);
        if (divisors.length) {
            const squaredSum = divisors.reduce((acc, e) => acc + Math.pow(e, 2), 0);
            const squaredSumroot = Math.sqrt(squaredSum);
            if (squaredSumroot === (squaredSumroot | 0)) {
                results.push([i, squaredSum]);
            }
        }
    }
    return results;
}

console.log(listSquared(1, 250), [
    [1, 1],
    [42, 2500],
    [246, 84100],
]);
console.log(listSquared(42, 250), [
    [42, 2500],
    [246, 84100],
]);
console.log(listSquared(250, 500), [[287, 84100]]);
