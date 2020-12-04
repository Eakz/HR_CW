// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => [...Array(n + 1).keys()].reverse().slice(0, -1);

const { assert } = require("chai");

describe("reverseSeq", function () {
    it("Sample Test", function () {
        assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
    });
});
