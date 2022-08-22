// https://www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript
String.prototype.capitalize = function () {
    var firstCharacterCode = this.charCodeAt(0)
    if(firstCharacterCode>=97){
        firstCharacterCode-=32
    }
    return String.fromCharCode(firstCharacterCode) + this.slice(1);
};

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai');
    describe('Tests', () => {
        it('test', () => {
            console.log('<h3>Example Test Cases</h3>');
            Test.assert.equal('hello world'.capitalize(), 'Hello world');
            Test.assert.equal(
                'an apple a day keeps the doctor away'.capitalize(),
                'An apple a day keeps the doctor away',
            );
            Test.assert.equal(
                'today, I have a dream ... '.capitalize(),
                'Today, I have a dream ... ',
            );
            Test.assert.notEqual(
                'hello how are you?  i am john doe'.capitalize(),
                'Hello how are you?  I am John Doe',
                'You were not asked to correct all of the capitalization errors in the string.',
            );
        });
    });
} else {
    console.log('hello world'.capitalize(), 'Hello world');
    console.log('hello world'.capitalize(), 'Hello world');
    console.log(
        'an apple a day keeps the doctor away'.capitalize(),
        'An apple a day keeps the doctor away',
    );
    console.log('today, I have a dream ... '.capitalize(), 'Today, I have a dream ... ');
    console.log(
        'hello how are you?  i am john doe'.capitalize(),
        'Hello how are you?  I am John Doe',
        'You were not asked to correct all of the capitalization errors in the string.',
    );
}
