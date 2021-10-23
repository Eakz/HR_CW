// https://www.codewars.com/kata/6171a85207ab6b003fadc43e/train/javascript


function figureOut(arr) {
    const stats = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const word = arr[i];
            const letter = word[j].trim();
            if (letter) {
                if (stats[letter]) {
                    if (Math.abs(stats[letter].pos - j) >= 2) {
                        return letter;
                    }
                }
                stats[letter] = {
                    pos: j,
                };
            }
        }
    }
    return null;
}

console.log(figureOut(['a b', ' ba']), 'a');
console.log(figureOut(['ab kl', 'ba kl', 'a blk']), 'b');
console.log(figureOut(['icwth', 'wicth', 'witch']), 'w');
console.log(figureOut(['abcdef', 'abcfde']), 'f');
console.log(figureOut(['a  b  c', 'a b  c ', ' ba   c']), 'a');
console.log(figureOut(['bc  x', ' bcx ', ' xbc ']), 'x');
console.log(figureOut(['abcd', 'cabd']), 'c');
console.log(figureOut(['xyz', 'yxz', 'zyx']), 'z');
console.log(figureOut([' x y z ', ' xy  z ', 'yx   z ', ' xy  z ']), 'y');
console.log(figureOut(['hop', 'hpo', 'pho']), null);
console.log(
    figureOut([
        'abdgefc',
        'adbegcf',
        'daebgfc',
        'adegfcb',
        'aedfgbc',
        'adegfcb',
        'dagecfb',
        'adegfcb',
        'adgefbc',
    ]),
    'b',
);
console.log(
    figureOut([
        'dac   b ',
        'acd    b',
        'adc    b',
        'acd   b ',
        'ca d   b',
        'c ad  b ',
        'c ad  b ',
        ' ca db  ',
        ' ac bd  ',
    ]),
    'd',
);
console.log(
    figureOut([
        'cb feg da',
        'bcf ge ad',
        'cbfg ea d',
        'cfb gae d',
        'fcbga e d',
        'fbcag  ed',
        'bfac ged ',
        'baf cgde ',
    ]),
    null,
);
