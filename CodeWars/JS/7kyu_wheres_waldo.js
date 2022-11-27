// https://www.codewars.com/kata/638244fb08da6c61361d2c40

const { mainModule } = require('process');

function findWaldo(crowd) {
    const notWaldo = {};
    const possibleWaldo = {};
    for (let y = 0; y < crowd.length; y++) {
        const row = crowd[y];
        for (let x = 0; x < row.length; x++) {
            const letter = row[x];
            if (notWaldo[letter]) {
            } else if (possibleWaldo[letter]) {
                possibleWaldo[letter] = false;
                notWaldo[letter] = true;
            } else {
                possibleWaldo[letter] = [y, x];
            }
        }
    }
    return Object.values(possibleWaldo).filter(e=>!!e)[0]
}

if (require.main.path.includes('mocha')) {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;

    describe('Solution test', () => {
        function test(userSolution, expected) {
            if (sanityChecks(userSolution)) {
                const [y, x] = userSolution;
                const [r, c] = expected;
                if (!(y == r && x == c))
                    assert.fail(
                        `You did not find Waldo. Expected [${y}, ${x}] to be [${r}, ${c}]`,
                    );
            }
        }

        describe('Example tests', () => {
            it('Should find Waldo at the beach', () => {
                const crowd = [
                    '             ', // Air
                    '         w   ', // Air with a bird
                    '   w         ', // Air with a bird
                    '~~~~~~~~~~~~~', // Sea
                    '.~..~~.~~~..~', // Waves on beach
                    '...P......P..', // Beach with some people
                    '......P..P...', // Beach with some people
                    '..PW.........', // Beach with Waldo and presumably a friend next to him
                ];
                const userSolution = findWaldo(crowd.slice());
                const expected = [7, 3];
                test(userSolution, expected);
            });

            it('Should find Waldo at the pyramid', () => {
                const crowd = [
                    '                              ', // Air
                    '                              ', // Air
                    '            _                 ', // Top of pyramid
                    '          _____               ', // Layer of pyramid
                    '        _________             ', // Layer of pyramid
                    '  B  _______________   G   GG ', // Ground layer of pyramid with several people, including Waldo
                ];
                const userSolution = findWaldo(crowd.slice());
                const expected = [5, 2];
                test(userSolution, expected);
            });
        });
    });
} else {
    // console.log(
    //     findWaldo([
    //         '             ', // Air
    //         '         w   ', // Air with a bird
    //         '   w         ', // Air with a bird
    //         '~~~~~~~~~~~~~', // Sea
    //         '.~..~~.~~~..~', // Waves on beach
    //         '...P......P..', // Beach with some people
    //         '......P..P...', // Beach with some people
    //         '..PW.........', // Beach with Waldo and presumably a friend next to him
    //     ]),
    //     [7, 3],
    // );
    // console.log(
    //     findWaldo([
    //         '                              ', // Air
    //         '                              ', // Air
    //         '            _                 ', // Top of pyramid
    //         '          _____               ', // Layer of pyramid
    //         '        _________             ', // Layer of pyramid
    //         '  B  _______________   G   GG ', // Ground layer of pyramid with several people, including Waldo
    //     ]),
    //     [5, 2],
    // );
    console.log(findWaldo([
        '   W         ',
        '         w   ',
        '   w    W    ',
        '~~~~~~~~~~~~~',
        '....~~...~..~',
        '.A.P..K.e.P.F',
        '..#.FfeP.kPk.',
        '..Pf..f.fAA#.'
      ]),[5,6])
}
