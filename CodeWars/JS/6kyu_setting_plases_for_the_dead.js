// https://www.codewars.com/kata/6646c0c08b97085ca216d346/train/javascript

const data = {
    QUTHCRDMZ: 0,
    WEVOXING: 3,
    JFABKPLY: 6,
    S: 9,
};

const emptySeat = '_____';

const letterValueMap = (() => {
    const result = {};
    for (let key in data) {
        for (let letter of key) {
            result[letter] = data[key];
        }
    }
    return result;
})();

const placeSearch = (start, list, max = 11) => {
    if (list[start] === emptySeat) return start;
    while (step < max + 1) {
        const counterClockPos = Math.abs(max + 1 + start - step) % (max + 1);
        const clockwise = (start + step) % (max + 1);
        if (list[counterClockPos] === emptySeat) return counterClockPos;
        if (list[clockwise] === emptySeat) return clockwise;
        step++;
    }
    return -1; //table full
};

function setTable(theDead) {
    const table = Array(12).fill(emptySeat);
    for (let d = 0; d < theDead.length; d++) {
        const currentDead = theDead[d];
        const cornerStart = letterValueMap[currentDead[0]] || 0;
        const seatPosition = placeSearch(cornerStart, table);
        if (seatPosition === -1) break;
        table[seatPosition] = currentDead;
    }
    return table;
}

if (require.main.path.includes('mocha')) {
    const chai = require('chai');
    const assert = chai.assert;
    chai.config.truncateThreshold = 0;

    describe('setTable < Sample Tests >', function () {
        it('Test 1 ~ Artlu Only', function () {
            const theDead = ['Artlu'];
            const submitted = setTable(theDead);
            const expected = [
                '_____',
                '_____',
                '_____',
                '_____',
                '_____',
                '_____',
                'Artlu',
                '_____',
                '_____',
                '_____',
                '_____',
                '_____',
            ];
            assert.deepEqual(submitted, expected);
        });
        it('Test 2 ~ Artlu, Breca, Cityl, and Dedaf', function () {
            const theDead = [
                'Yojne',
                'Xenna',
                'Verap',
                'Ebyam',
                'Teseb',
                'Ycuag',
                'Onets',
                'Skcaw',
                'Yrovi',
                'Tpets',
                'Lizuf',
                'Girnu',
            ];
            const submitted = setTable(theDead);
            const expected = [
                'Teseb',
                'Onets',
                'Verap',
                'Xenna',
                'Ebyam',
                'Ycuag',
                'Yojne',
                'Yrovi',
                'Lizuf',
                'Skcaw',
                'Girnu',
                'Tpets',
            ];
            assert.deepEqual(submitted, expected);
        });
        it('Test 3 ~ All Favor the Same Feature', function () {
            const theDead = [
                'Sevap',
                'Syolc',
                'Sgulg',
                'Stolb',
                'Sknoh',
                'Spord',
                'Sgnaf',
                'Shcat',
                'Sknit',
                'Snirg',
                'Senin',
                'Sliob',
            ];
            const submitted = setTable(theDead);
            const expected = [
                'Sgnaf',
                'Sknit',
                'Senin',
                'Sliob',
                'Snirg',
                'Shcat',
                'Spord',
                'Stolb',
                'Syolc',
                'Sevap',
                'Sgulg',
                'Sknoh',
            ];
            assert.deepEqual(submitted, expected);
        });
        it('Test 4 ~ Example From the Description', function () {
            const theDead = [
                'Yojne',
                'Xenna',
                'Verap',
                'Ebyam',
                'Teseb',
                'Ycuag',
                'Onets',
                'Skcaw',
                'Yrovi',
                'Tpets',
                'Lizuf',
                'Girnu',
            ];
            const submitted = setTable(theDead);
            const expected = [
                'Teseb',
                'Onets',
                'Verap',
                'Xenna',
                'Ebyam',
                'Ycuag',
                'Yojne',
                'Yrovi',
                'Lizuf',
                'Skcaw',
                'Girnu',
                'Tpets',
            ];
            assert.deepEqual(submitted, expected);
        });
        it('Test 5 ~ Too Many Ghosts to Seat', function () {
            const theDead = [
                'Egdob',
                'Liame',
                'Skceg',
                'Yesba',
                'Cinid',
                'Sallo',
                'Sumac',
                'Triks',
                'Sipat',
                'Elona',
                'Sreod',
                'Deyab',
                'Dlaps',
                'Nevey',
                'Htron',
            ];
            const submitted = setTable(theDead);
            const expected = [
                'Cinid',
                'Sreod',
                'Elona',
                'Egdob',
                'Deyab',
                'Yesba',
                'Liame',
                'Sipat',
                'Sallo',
                'Skceg',
                'Sumac',
                'Triks',
            ];
            assert.deepEqual(submitted, expected);
        });
    });
} else {
    const theDead1 = [
        'Yojne',
        'Xenna',
        'Verap',
        'Ebyam',
        'Teseb',
        'Ycuag',
        'Onets',
        'Skcaw',
        'Yrovi',
        'Tpets',
        'Lizuf',
        'Girnu',
    ];
    const submitted1 = setTable(theDead1);
    const expected1 = [
        'Teseb',
        'Onets',
        'Verap',
        'Xenna',
        'Ebyam',
        'Ycuag',
        'Yojne',
        'Yrovi',
        'Lizuf',
        'Skcaw',
        'Girnu',
        'Tpets',
    ];
    console.log(submitted1, expected1);

    const theDead2 = [
        'Sevap',
        'Syolc',
        'Sgulg',
        'Stolb',
        'Sknoh',
        'Spord',
        'Sgnaf',
        'Shcat',
        'Sknit',
        'Snirg',
        'Senin',
        'Sliob',
    ];
    const submitted2 = setTable(theDead2);
    const expected2 = [
        'Sgnaf',
        'Sknit',
        'Senin',
        'Sliob',
        'Snirg',
        'Shcat',
        'Spord',
        'Stolb',
        'Syolc',
        'Sevap',
        'Sgulg',
        'Sknoh',
    ];
    console.log(submitted2, expected2);

    const theDead3 = [
        'Yojne',
        'Xenna',
        'Verap',
        'Ebyam',
        'Teseb',
        'Ycuag',
        'Onets',
        'Skcaw',
        'Yrovi',
        'Tpets',
        'Lizuf',
        'Girnu',
    ];
    const submitted3 = setTable(theDead3);
    const expected3 = [
        'Teseb',
        'Onets',
        'Verap',
        'Xenna',
        'Ebyam',
        'Ycuag',
        'Yojne',
        'Yrovi',
        'Lizuf',
        'Skcaw',
        'Girnu',
        'Tpets',
    ];
    console.log(submitted3, expected3);

    const theDead4 = [
        'Egdob',
        'Liame',
        'Skceg',
        'Yesba',
        'Cinid',
        'Sallo',
        'Sumac',
        'Triks',
        'Sipat',
        'Elona',
        'Sreod',
        'Deyab',
        'Dlaps',
        'Nevey',
        'Htron',
    ];
    const submitted4 = setTable(theDead4);
    const expected4 = [
        'Cinid',
        'Sreod',
        'Elona',
        'Egdob',
        'Deyab',
        'Yesba',
        'Liame',
        'Sipat',
        'Sallo',
        'Skceg',
        'Sumac',
        'Triks',
    ];
    console.log(submitted4, expected4);
}
