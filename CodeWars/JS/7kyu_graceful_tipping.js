// https://www.codewars.com/kata/5eb27d81077a7400171c6820

//You should return the final amount
const round = (unrounded) => {
    const len = Math.ceil(unrounded).toString().length;
    const part = len == 2 ? 5 : 5 * 10 ** (len - 2);
    const left = unrounded % part;
    return unrounded - left + part;
};
function gracefulTipping(bill) {
    const unrounded = bill * 1.15;
    return unrounded < 10 ? Math.ceil(unrounded) : round(unrounded);
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
console.log(gracefulTipping(1.09)); // 2);
console.log(gracefulTipping(7)); // 9);
console.log(gracefulTipping(11.99)); // 15);
console.log(gracefulTipping(99)); // 15);
