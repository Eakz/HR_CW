// https://www.codewars.com/kata/5b5ce2176d0db7331f0000c0/train/javascript

let getRopeLength = function(fieldDiameter, eatenRatio) {

    if(eatenRatio <= 0)
      return 0;
  
    if (eatenRatio >= 1)
      return fieldDiameter;
  
    let fieldRadius = fieldDiameter/2.0;
    let wholeArea = fieldRadius * fieldRadius * Math.PI;
    let eatenArea = wholeArea * eatenRatio; 
  
    let minLen = 0;
    let maxLen = fieldDiameter;
  
    while(Math.floor(maxLen) != Math.floor(minLen)) {
  
      let len = minLen + (maxLen - minLen) / 2;
      let area = calcArea(fieldDiameter, len);
  
      if(area > eatenArea) {
        maxLen = len;
      } else if(area <= eatenArea) {
        minLen = len;
      }
    }
  
    return Math.floor(minLen) | 0;
  }
  
  let calcArea = function(fieldDiameter, rope) {
  
    let angle = 2 * Math.acos(rope/fieldDiameter);
    let sectorArea = rope * rope * angle / 2;     
    let fieldRadius = fieldDiameter / 2;
    let theta = 2 * Math.asin((rope / 2) / fieldRadius);          
    let segmentArea = fieldRadius * fieldRadius / 2 * (theta - Math.sin(theta));
  
    return sectorArea + 2*segmentArea;
  }

console.log(getRopeLength(200, 0.5), 115);
console.log(getRopeLength(10, 0.5), 5);
console.log(getRopeLength(200, 0), 0);
console.log(getRopeLength(200, 1), 200);
console.log(getRopeLength(0, 0.0), 0);
console.log(getRopeLength(0, 0.5), 0);
console.log(getRopeLength(0, 1.0), 0);

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    describe('Example Tests', function () {
        it('It should works for basic tests.', function () {
            assert.strictEqual(getRopeLength(200, 0.5), 115);
            assert.strictEqual(getRopeLength(10, 0.5), 5);
        });
    });

    describe('Edge cases', function () {
        it('Eat nothing.', function () {
            assert.strictEqual(getRopeLength(200, 0), 0);
        });
        it('Eat all.', function () {
            assert.strictEqual(getRopeLength(200, 1), 200);
        });
        it('No grass.', function () {
            assert.strictEqual(getRopeLength(0, 0.0), 0);
            assert.strictEqual(getRopeLength(0, 0.5), 0);
            assert.strictEqual(getRopeLength(0, 1.0), 0);
        });
    });
}
