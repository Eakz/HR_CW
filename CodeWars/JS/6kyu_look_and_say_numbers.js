// https://www.codewars.com/kata/53ea07c9247bc3fcaa00084d/train/javascript

const lookAndSay = (data, len, a = []) => {
    if (len === 0) {
        return a;
    }
    const see = s =>
        [...s]
            .reduce((acc, e) => {
                const lastEl = acc[acc.length - 1];

                if (lastEl && lastEl.includes(e)) {
                    acc[acc.length - 1] = [...lastEl, e];
                } else {
                    acc = [...acc, [e]];
                }
                return acc;
            }, [])
            .map(e => `${e.length}${e[0]}`)
            .join('');
    const seeData = see(data);
    return lookAndSay(seeData, len - 1, [...a, seeData]);
};

if (process.mainModule.path.includes('mocha')) {
    const Test = require('chai').assert;
    describe('Tests', () => {
        it('test', () => {
            result = ['11', '21', '1211', '111221', '312211'];
            Test.equal(lookAndSay('1', 5).join(','), result.join(','));

            result = [
                '11121519',
                '311211151119',
                '13211231153119',
                '1113122112132115132119',
                '31131122211211131221151113122119',
            ];
            Test.equal(lookAndSay('1259', 5).join(','), result.join(','));
        });
    });
}
