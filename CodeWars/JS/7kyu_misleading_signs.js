// https://www.codewars.com/kata/65dd5b414ccda60a4be32c2a/train/javascript

function gaslighting(shirtWord, yourWord, friendsLetters) {
    for(let i=0;i<shirtWord.length;i++){
        if(shirtWord[i]!==yourWord[i] && (friendsLetters.includes(shirtWord[i])||friendsLetters.includes(yourWord[i]))) return true
    };
    return false;
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    it('example tests', function () {
        assert.strictEqual(
            gaslighting('snack', 'snake', 'c'),
            true,
            `gaslighting("snack","snake","c")`,
        );
        assert.strictEqual(
            gaslighting('snack', 'snack', 'snack'),
            false,
            `gaslighting("snack","snack","snack")`,
        );
        assert.strictEqual(
            gaslighting('snake', 'snack', 'c'),
            true,
            `gaslighting("snake","snack","c")`,
        );
        assert.strictEqual(
            gaslighting('ping', 'pong', 'png'),
            false,
            `gaslighting("ping","pong","png")`,
        );
        assert.strictEqual(
            gaslighting('ping', 'pong', 'i'),
            true,
            `gaslighting("ping","pong","i")`,
        );
    });
} else {
    console.log(
        gaslighting('snack', 'snake', 'c'),
        true,
        `gaslighting("snack","snake","c")`,
    );
    console.log(
        gaslighting('snack', 'snack', 'snack'),
        false,
        `gaslighting("snack","snack","snack")`,
    );
    console.log(
        gaslighting('snake', 'snack', 'c'),
        true,
        `gaslighting("snake","snack","c")`,
    );
    console.log(
        gaslighting('ping', 'pong', 'png'),
        false,
        `gaslighting("ping","pong","png")`,
    );
    console.log(gaslighting('ping', 'pong', 'i'), true, `gaslighting("ping","pong","i")`);
    console.log(gaslighting("o","m","mrsvk"), true);
}
