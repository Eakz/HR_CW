// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript
function isRubyComing(list) {
    return list.some(dev => dev.language === 'Ruby');
}
var list1 = [
    {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
    },
];
var list2 = [
    {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
    },
];

console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);
if (require.main.path.includes('mocha')) {
    const Test = require('chai');
    describe('Tests', () => {
        it('test', () => {
            Test.assert.equal(isRubyComing(list1), true);
            Test.assert.equal(isRubyComing(list2), false);
        });
    });
}
