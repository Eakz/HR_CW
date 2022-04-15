// https://www.codewars.com/kata/61e0c66deb372a0007421570/train/javascript

const fix = fn =>x=> fn(fix(fn))(x);

const factorial = f => n => n ? n * f(n - 1n) : 1n;

const fibonacci = f => i => i <= 1 ? BigInt(i) : f(i - 1) + f(i - 2);

const foldr = f => fn => z => xs =>
  (x => x.done ? z : fn(x.value)(() => f(fn)(z)(xs)))(xs.next())

if (process.mainModule.path.includes('mocha')) {
    const { assert } = require('chai');

    const compose = f => g => x => f(g(x));
    const memoise = cache => fn => n => n in cache ? cache[n] : (cache[n] = fn(n));

    const fixFac = fix(factorial);
    const fixFib = fix(fibonacci);
    const memoFib = (function (cache) {
        return fix(compose(memoise(cache))(fibonacci));
    })([]);
    const fixFoldr = fix(foldr);

    describe('Fix this', () => {
        describe('example tests', () => {
            it('fix', () => {
                const fixRev = fix(
                    reverse => xs =>
                        xs.length ? reverse(xs.slice(1)).concat([xs[0]]) : xs,
                );
                assert.strictEqual(fixRev('fix'), 'xif');
                assert.strictEqual(fixRev('reverse me'), 'em esrever');
                assert.strictEqual(fixRev('racecar'), 'racecar');
                assert.strictEqual(
                    fixRev('A man, a plan, a canal - Panama!'),
                    '!amanaP - lanac a ,nalp a ,nam A',
                );
                assert.strictEqual(fixRev('irreversible'), 'elbisreverri');
                assert.strictEqual(fixRev('desserts'), 'stressed');
                assert.deepEqual(
                    fixRev([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]),
                    [9, 5, 3, 5, 6, 2, 9, 5, 1, 4, 1, 3],
                );
            });
            it('factorial', () => {
                assert.strictEqual(fixFac(0n), 1n);
                assert.strictEqual(fixFac(1n), 1n);
                assert.strictEqual(fixFac(2n), 2n);
                assert.strictEqual(fixFac(3n), 6n);
                assert.strictEqual(fixFac(4n), 24n);
                assert.strictEqual(fixFac(5n), 120n);
            });
            it('fibonacci', () => {
                assert.strictEqual(fixFib(0), 0n);
                assert.strictEqual(fixFib(1), 1n);
                assert.strictEqual(fixFib(2), 1n);
                assert.strictEqual(fixFib(3), 2n);
                assert.strictEqual(fixFib(4), 3n);
                assert.strictEqual(fixFib(5), 5n);
                assert.strictEqual(fixFib(6), 8n);
                assert.strictEqual(fixFib(7), 13n);
                assert.strictEqual(fixFib(8), 21n);
                assert.strictEqual(memoFib(50), 12586269025n);
                assert.strictEqual(memoFib(100), 354224848179261915075n); // try this with `fixFib` ..
            });
            it('foldr', () => {
                const xs = (function* xs(xs) {
                    yield* xs;
                })([1, 2, 3, 4]);
                const mul = x => z => x * z();
                assert.strictEqual(fixFoldr(mul)(1)(xs), 24);
            });
        });
    });
}
