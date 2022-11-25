// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/typescript
import { assert } from 'chai';

export function invert(array: number[]): number[] {
    return array.map(n=>n*-1);
}

if (require.main?.path.includes('mocha')) {
    // TODO Add your tests here
    describe('Invert array values', function () {
        it('Basic Tests', function () {
            assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
            assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
            assert.deepEqual(invert([]), []);
            assert.deepEqual(invert([0]), [-0]);
        });
    });
} else {
    console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    console.log(invert([]), []);
    console.log(invert([0]), [-0]);
}
