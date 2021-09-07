// https://www.codewars.com/kata/6135e4f40cffda0007ce356b/train/javascript

function bishop(s, e, n) {
    const [s0, e0] = [s.charCodeAt(), e.charCodeAt()];
    if (n == 0) return s == e;
    if (n == 1) return Math.abs(s0 - e0) == Math.abs(1 * s[1] - e[1]);
    return (s0 - s[1]) % 2 == (e0 - e[1]) % 2
  }


const chai = require('chai');
const assert = chai.assert;

assert.equal(bishop("a1", "b4", 2), true)
assert.equal(bishop("a1", "b5", 5), false)
assert.equal(bishop("f1", "f1", 0), true)
assert.equal(bishop("e6", "a1", 2), false)
