function cleverSplit(s) {
    const result = [];
    let part = '';
    let insideBrackets = false;
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letter === '[') {
            insideBrackets = true;
        }
        if (letter === ']') {
            insideBrackets = false;
        }
        if (letter.match(/\S/)||insideBrackets) {
            part += letter;
        } else if (!insideBrackets) {
            result.push(part);
            part = '';
        }
        
    }
    return result.concat(part);
}

function cleverSplit(s){
    return s.match(/\[.*?\]|\S+/g)
  }
  
if (require.main.path.includes('mocha')) {
    const Test = require('chai');

    describe('Clever split tests', function () {
        it('basic tests', function () {
            [
                {
                    s: 'Buy a !car [!red green !white] [cheap or !new]',
                    ans: ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]'],
                },
                {
                    s: '!Learning !javascript is [a joy]',
                    ans: ['!Learning', '!javascript', 'is', '[a joy]'],
                },
                {
                    s: '[Cats and dogs] are !beautiful and [cute]',
                    ans: ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]'],
                },
            ].forEach(t =>
                Test.assert.deepEqual(
                    cleverSplit(t.s),
                    t.ans,
                    `wrong answer in test s='${t.s}'`,
                ),
            );
        });
    });
} else {
    [
        {
            s: 'Buy a !car [!red green !white] [cheap or !new]',
            ans: ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]'],
        },
        {
            s: '!Learning !javascript is [a joy]',
            ans: ['!Learning', '!javascript', 'is', '[a joy]'],
        },
        {
            s: '[Cats and dogs] are !beautiful and [cute]',
            ans: ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]'],
        },
    ].forEach(t => console.log(cleverSplit(t.s), t.ans));
}
