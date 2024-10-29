// https://www.codewars.com/kata/53b138b3b987275b46000115/train/python
function compareVersions(v1, v2) {
    if (v1 === v2) return true;
    const split = s => s.split('.');
    const getMaxLen = a => Math.max(...a.map(e => e.length));
    const mapToNumber = a => a.map(e => parseInt(e));
    const splited = [mapToNumber(split(v1)), mapToNumber(split(v2))];
    const maxLen = getMaxLen(splited);
    let wasEqual = true;
    for (let i = 0; i < maxLen; i++) {
        const v1R = splited[0][i] || 0;
        const v2R = splited[1][i] || 0;

        if (v1R > v2R && wasEqual) return true;
        if (v1R !== v2R) wasEqual = false;
    }
    return false;
}
if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Sample tests', () => {
        it('Testing versions without subversion', () =>
            assert.isTrue(compareVersions('11', '10')));

        it('Test equal versions', () => assert.isTrue(compareVersions('11', '11')));

        it('Adding a subversion should make this version "larger"', () =>
            assert.isTrue(compareVersions('10.4.6', '10.4')));

        it('Subversion precedence is smaller than Version', () =>
            assert.isFalse(compareVersions('10.4', '11')));

        it('Version value is not the same as its decimal value', () =>
            assert.isFalse(compareVersions('10.4', '10.10')));

        it('Adding subversion does not make it larger than a greater version', () =>
            assert.isFalse(compareVersions('10.4.9', '10.5')));
    });
} else {
    console.log(compareVersions('11', '10'), true);
    console.log(compareVersions('10.4.6', '10.4'), true);
    console.log(compareVersions('10.4', '11'), false);
    console.log(compareVersions('10.4', '10.10'), false);
    console.log(compareVersions('10.4.9', '10.5'), false);
    console.log(
        compareVersions('199.86.100.10.2.199.157.25.37', '199.86.100.10.2.187.46.105.16'),
        true,
    );
}
