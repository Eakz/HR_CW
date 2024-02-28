// https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript

function smallest(n) {
    const results = [[n, 0, 0]];
    const def = [...`${n}`];
    for (let i = 0; i < def.length; i++) {
        const number = def[i];
        const curNumberFiltered = [...def.slice(0, i), ...def.slice(i + 1)];
        for (let j = 0; j < def.length; j++) {
            if (i !== j) {
                const currentNumber = [
                    ...curNumberFiltered.slice(0, j),
                    number,
                    ...curNumberFiltered.slice(j),
                ];
                results.push([Number.parseInt(currentNumber.join('')), i, j]);
            }
        }
    }
    return results.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] === b[1]) {
                return a[2] - b[2];
            }
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })[0];
}
console.log(smallest(261235), [126235, 2, 0]);
console.log(smallest(209917), [29917, 0, 1]);
console.log(smallest(285365), [238565, 3, 1]);
console.log(smallest(269045), [26945, 3, 0]);
console.log(smallest(296837), [239687, 4, 1]);
console.log(smallest(1000000), [1, 0, 6]);
if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    function testing(n, res) {
        Test.deepEqual(smallest(n), res);
    }
    describe('Basic tests', function () {
        it('smallest', function () {
            testing(261235, [126235, 2, 0]);
            testing(209917, [29917, 0, 1]);
            testing(285365, [238565, 3, 1]);
            testing(269045, [26945, 3, 0]);
            testing(296837, [239687, 4, 1]);
        });
    });
}
