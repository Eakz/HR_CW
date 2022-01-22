// Offtopic as of lately due to holidays and some exhaustion of coding I tend to do easy tasks right now
// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
const Test = require('chai')

const sumStr = (a, b) => eval(`${a || 0}+${b || 0}`).toString();
Test.assertEquals(sumStr("4", "5"), "9");
Test.assertEquals(sumStr("34", "5"), "39");
