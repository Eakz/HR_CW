// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    return [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ][(nbPetals-1)%6]

}

if (process.mainModule.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('howMuchILoveYou', function () {
        it('Basic tests', function () {
            assert.strictEqual(howMuchILoveYou(7), 'I love you');
            assert.strictEqual(howMuchILoveYou(3), 'a lot');
            assert.strictEqual(howMuchILoveYou(6), 'not at all');
        });
    });
} else {
    console.log(howMuchILoveYou(7), 'I love you');
    console.log(howMuchILoveYou(3), 'a lot');
    console.log(howMuchILoveYou(6), 'not at all');
}
