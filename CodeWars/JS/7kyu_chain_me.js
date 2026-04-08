function chain(input, fs) {
    return fs.reduce((acc, fn) => fn(acc), input);
}

if (require.main.path.includes('mocha')) {
    describe('Tests', function () {
        const { assert } = require('chai');

        function add10(x) {
            return x + 10;
        }

        function mulBy30(x) {
            return x * 30;
        }

        it('sample tests', function () {
            assert.strictEqual(chain(2, [add10]), 12);
            assert.strictEqual(chain(2, [add10, add10]), 22);
            assert.strictEqual(chain(2, [mulBy30, add10]), 70);
            assert.strictEqual(chain(2, [add10, mulBy30]), 360);
            assert.strictEqual(chain(666, []), 666);
        });
    });
} else {
    function add10(x) {
        return x + 10;
    }

    function mulBy30(x) {
        return x * 30;
    }
    console.log(chain(2, [add10]), 12);
    console.log(chain(2, [add10, add10]), 22);
    console.log(chain(2, [mulBy30, add10]), 70);
    console.log(chain(2, [add10, mulBy30]), 360);
    console.log(chain(666, []), 666);
}
