// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
    const trimmed = str.trim();
    const split = trimmed.split(/\s+/);
    if (!trimmed || !split.length || split.join('').length > 139) return false;
    const capitalize = split.map(w => w[0].toUpperCase() + w.slice(1));
    return '#' + capitalize.join('');
}

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(
                generateHashtag(''),
                false,
                'Expected an empty string to return false',
            );
            Test.equal(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
            Test.equal(
                generateHashtag('Do We have A Hashtag'),
                '#DoWeHaveAHashtag',
                'Expected a Hashtag (#) at the beginning.',
            );
            Test.equal(
                generateHashtag('Codewars'),
                '#Codewars',
                'Should handle a single word.',
            );
            Test.equal(
                generateHashtag('Codewars Is Nice'),
                '#CodewarsIsNice',
                'Should remove spaces.',
            );
            Test.equal(
                generateHashtag('Codewars is nice'),
                '#CodewarsIsNice',
                'Should capitalize first letters of words.',
            );
            Test.equal(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
            Test.equal(
                generateHashtag(
                    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
                ),
                false,
                'Should return false if the final word is longer than 140 chars.',
            );
            Test.equal(
                generateHashtag('a'.repeat(139)),
                '#A' + 'a'.repeat(138),
                'Should work',
            );
            Test.equal(generateHashtag('a'.repeat(140)), false, 'Too long');
        });
    });
} else {
    console.log(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
    console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
    console.log(generateHashtag('a'.repeat(140)), false, 'Too long');
    console.log(
        generateHashtag(
            generateHashtag('Codewars is nice'),
            '#CodewarsIsNice',
            'Should capitalize first letters of words.',
        ),
    );
}
