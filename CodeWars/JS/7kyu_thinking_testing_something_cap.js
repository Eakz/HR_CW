// https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript

function testit(s) {
    return s.split(' ').map(e=>e.slice(0,-1)+(e[e.length-1]||'').toUpperCase()).join(' ')
}

if (require.main.path.includes('mocha')) {
    const Test = chai.assert;
    //return s.toUpperCase() ?
    Test.equal(testit(''), '', '');
    Test.equal(testit('a'), 'A', '');
    Test.equal(testit('b'), 'B', '');
    Test.equal(testit('a a'), 'A A', '');
    Test.equal(testit('a b'), 'A B', '');
    Test.equal(testit('a b c'), 'A B C', '');
    //click "Submit" try more testcase...
} else {
    console.log(testit(''), '', '');
    console.log(testit('a'), 'A', '');
    console.log(testit('b'), 'B', '');
    console.log(testit('a a'), 'A A', '');
    console.log(testit('a b'), 'A B', '');
    console.log(testit('a b c'), 'A B C', '');
    console.log(testit('ab ab'), 'aB aB', '');
}
