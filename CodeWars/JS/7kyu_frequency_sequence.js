// https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript

function freqSeq(str, sep) {
    const occurence = {};
    const listStr = [...str];
    listStr.forEach(e => {
        if (occurence[e]) {
            occurence[e]++;
        } else {
            occurence[e] = 1;
        }
    });
    return listStr.map(e => occurence[e]).join(sep);
}

console.log(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999', ':'), '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$', 'x'), '3x3x3x2x2x1');
