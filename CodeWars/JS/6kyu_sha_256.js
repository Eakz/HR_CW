// https://www.codewars.com/kata/587fb57e12fc6eadf200009b/train/javascript
const crypto = require('crypto')

function sha256(string) {
    return crypto.createHash('sha256').update(string).digest('hex');
}

if (require.main.path.includes('mocha')) {
    const { strictEqual } = require('chai').assert;

    describe('Tests suite', function () {
        function doTest(string, hash) {
            const actual = sha256(string);
            strictEqual(actual, hash, `for string:\n"${string}"\n`);
        }

        it('sample tests', function () {
            doTest(
                '',
                'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            );
            doTest(
                'Hello World!',
                '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
            );
            doTest(
                'Codewars',
                'aeb7c211fae7fff7546d87886a7d3ace8e9ebc30bb36062dfec7c92c78a3e1db',
            );
        });
    });
} else {
    console.log(
        sha256(''),
        'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    );
    console.log(
        sha256('Hello World!'),
        '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    );
    console.log(
        sha256('Codewars'),
        'aeb7c211fae7fff7546d87886a7d3ace8e9ebc30bb36062dfec7c92c78a3e1db',
    );
}
