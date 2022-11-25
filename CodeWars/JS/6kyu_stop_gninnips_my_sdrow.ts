// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript
import { assert } from 'chai';

export function spinWords(words: string): string {
    return words
        .split(' ')
        .map(w => (w.length >= 5 ? Array.from(w).reverse().join('') : w))
        .join(' ');
}

if (require.main.path.includes('mocha')) {
    describe('spinWords', () => {
        it('should pass some fixed tests', () => {
            assert.strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
            assert.strictEqual(spinWords('This is a test'), 'This is a test');
        });
    });
} else {
    console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
    console.log(spinWords('This is a test'), 'This is a test');
}
