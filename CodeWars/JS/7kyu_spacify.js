// https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript

function spacify(str) {
    return [...str].join(' ')
}

if (process.mainModule.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('spacify', function () {
        it('basic tests', function () {
            assert.equal(spacify('hello world'), 'h e l l o   w o r l d');
            assert.equal(spacify('12345'), '1 2 3 4 5');
        });
    });
}
