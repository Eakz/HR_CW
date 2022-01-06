// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

const alternateCase = s =>[...s].map(e=>e.charCodeAt()<95?e.toLowerCase():e.toUpperCase()).join('')

const _ = require('lodash')

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Alternate case", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(alternateCase("abc"), "ABC");
    assert.strictEqual(alternateCase("ABC"), "abc");
    assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD"); 
  })
});
