// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// Brute force solution
function queueTime(queue, n) {
    let tills = Array(n).fill(0);
    let result = 0;
    while (queue.length || (!queue.length && tills.some(e => e !== 0))) {
        while (tills.some(e => e === 0) && queue.length) {
            tills[tills.indexOf(0)] = queue.shift();
        }
        tills = tills.map(till => {
            if (till > 0) {
                return till - 1;
            }
            return till;
        });
        result++;
    }
    return result;
}

// Logical solution
function queueTime(queue, n) {
    let tills = Array(n).fill(0);

    queue.forEach(customer => {
        const forwardTill = tills.indexOf(Math.min(...tills));
        tills[forwardTill] += customer;
    });

    return Math.max(...tills);
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;

    describe('example tests', function () {
        Test.equal(queueTime([], 1), 0);
        Test.equal(queueTime([1, 2, 3, 4], 1), 10);
        Test.equal(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
        Test.equal(queueTime([1, 2, 3, 4, 5], 100), 5);
        Test.equal(queueTime([47, 26, 1, 33, 38, 19, 23, 36, 27, 3, 42], 4), 92);
    });
} else {
    // console.log(queueTime([], 1), 0);
    // console.log(queueTime([1, 2, 3, 4], 1), 10);
    console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
    // console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
    // console.log(queueTime([47, 26, 1, 33, 38, 19, 23, 36, 27, 3, 42], 4), 92);
}
