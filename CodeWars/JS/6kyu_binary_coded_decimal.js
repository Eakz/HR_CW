// https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript

toBcd=(a,b=Math.abs(a))=>(a<0?'-':'')+(""+b).split``.map(a=>('000'+(+a).toString(2)).slice(-4)).join` `

if (require.main.path.includes('mocha')) {
    const assert = require('chai').assert;

    describe('Tests', () => {
        it('sample tests', () => {
            assert.strictEqual(toBcd(10), '0001 0000');
            assert.strictEqual(toBcd(-10), '-0001 0000');
        });
    });
} else {
    console.log(toBcd(10), '0001 0000');
    console.log(toBcd(-10), '-0001 0000');
}
