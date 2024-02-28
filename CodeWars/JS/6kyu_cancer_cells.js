// https://www.codewars.com/kata/5931614bb2f657c18c0001c3/train/javascript

function cutCancerCells(organism) {
    return organism.replace(/([a-z]?C[a-z]?)|c/g,'')
}
if (require.main.path.includes('mocha')) {
    const { strictEqual } = require('chai').assert;

    function doTest(input, expected) {
        const actual = cutCancerCells(input);
        strictEqual(actual, expected, `for "${input}"\n`);
    }

    describe('Cancer removal', function () {
        it('Handmade tests', function () {
            doTest('CC', '');
            doTest('CAAC', 'AA');
            doTest('CaaC', '');
            doTest('C', '');
            doTest('acb', 'ab');
            doTest('aCb', '');
            doTest('acCb', 'a');
            doTest('acCcb', 'ab');
            doTest('ab', 'ab');
            doTest('aCZ', 'Z');
            doTest('BCE', 'BE');
            doTest('nce', 'ne');
            doTest('NcE', 'NE');
        });
    });
} else {
    console.log(cutCancerCells('CC'), '');
    console.log(cutCancerCells('CAAC'), 'AA');
    console.log(cutCancerCells('CaaC'), '');
    console.log(cutCancerCells('C'), '');
    console.log(cutCancerCells('acb'), 'ab');
    console.log(cutCancerCells('aCb'), '');
    console.log(cutCancerCells('acCb'), 'a');
    console.log(cutCancerCells('acCcb'), 'ab');
    console.log(cutCancerCells('ab'), 'ab');
    console.log(cutCancerCells('aCZ'), 'Z');
    console.log(cutCancerCells('BCE'), 'BE');
    console.log(cutCancerCells('nce'), 'ne');
    console.log(cutCancerCells('NcE'), 'NE');
}
