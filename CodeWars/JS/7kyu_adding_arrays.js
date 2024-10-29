// https://www.codewars.com/kata/59778cb1b061e877c50000cc

function arrAdder(arr) {
   return arr[0].map((e,i)=>([e,...arr.slice(1).map(el=>el[i])].join(''))).join(' ')
}
if (require.main.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            Test.equal(
                arrAdder([
                    ['J', 'L', 'L', 'M'],
                    ['u', 'i', 'i', 'a'],
                    ['s', 'v', 'f', 'n'],
                    ['t', 'e', 'e', ''],
                ]),
                'Just Live Life Man',
            );

            Test.equal(
                arrAdder([
                    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
                    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
                    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
                    ['', 'o', '', '', 'e', '', '', 'l'],
                    ['', 'c', '', '', 'r', '', '', ''],
                    ['', 'h', '', '', 'h', '', '', ''],
                    ['', 'o', '', '', 'o', '', '', ''],
                    ['', 'n', '', '', 'u', '', '', ''],
                    ['', 'd', '', '', 's', '', '', ''],
                    ['', 'r', '', '', 'e', '', '', ''],
                    ['', 'i', '', '', '', '', '', ''],
                    ['', 'a', '', '', '', '', '', ''],
                ]),
                'The Mitochondria is the powerhouse of the cell',
            );
        });
    });
} else {
    console.log(
        arrAdder([
            ['J', 'L', 'L', 'M'],
            ['u', 'i', 'i', 'a'],
            ['s', 'v', 'f', 'n'],
            ['t', 'e', 'e', ''],
        ]),
        'Just Live Life Man',
    );

    console.log(
        arrAdder([
            ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
            ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
            ['e', 't', '', 'e', 'w', '', 'e', 'l'],
            ['', 'o', '', '', 'e', '', '', 'l'],
            ['', 'c', '', '', 'r', '', '', ''],
            ['', 'h', '', '', 'h', '', '', ''],
            ['', 'o', '', '', 'o', '', '', ''],
            ['', 'n', '', '', 'u', '', '', ''],
            ['', 'd', '', '', 's', '', '', ''],
            ['', 'r', '', '', 'e', '', '', ''],
            ['', 'i', '', '', '', '', '', ''],
            ['', 'a', '', '', '', '', '', ''],
        ]),
        'The Mitochondria is the powerhouse of the cell',
    );
}
