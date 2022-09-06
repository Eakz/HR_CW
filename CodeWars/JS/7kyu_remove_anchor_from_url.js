// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url) {
    return url.split('#')[0]
}

if (process.mainModule.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Basic tests', () => {
        it('Testing for fixed tests', () => {
            assert.strictEqual(
                removeUrlAnchor('www.codewars.com#about'),
                'www.codewars.com',
            );
            assert.strictEqual(
                removeUrlAnchor('www.codewars.com/katas/?page=1#about'),
                'www.codewars.com/katas/?page=1',
            );
            assert.strictEqual(
                removeUrlAnchor('www.codewars.com/katas/'),
                'www.codewars.com/katas/',
            );
        });
    });
} else {
    console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
    console.log(
        removeUrlAnchor('www.codewars.com/katas/?page=1#about'),
        'www.codewars.com/katas/?page=1',
    );
    console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');
}
