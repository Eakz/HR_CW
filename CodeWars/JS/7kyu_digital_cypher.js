// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

function encode(str, n) {
    const numSplit = n.toString().split('').map(e=>parseInt(e))
    return [...str].map((e,i)=>e.charCodeAt()-96+numSplit[i%numSplit.length]);
}
if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai');
    describe('Encoding..', function () {
        it('Basic Tests', function () {
            Test.assert.deepEqual(encode('scout', 1939), [20, 12, 18, 30, 21]);
            Test.assert.deepEqual(
                encode('masterpiece', 1939),
                [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],
            );
        });
    });
} else {
    console.log(encode('scout', 1939), [20, 12, 18, 30, 21]);
    console.log(encode('masterpiece', 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
}
