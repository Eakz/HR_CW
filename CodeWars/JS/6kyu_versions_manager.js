// https://www.codewars.com/kata/5bc7bb444be9774f100000c3/train/javascript

const vm = initialVersion => {
    let initialDefault = [0, 0, 1];
    if (initialVersion) {
        const [major = 0, minor = 0, patch = 0] = initialVersion
            .split('.')
            .map(e => parseInt(e, 10));
        initialDefault = [major, minor, patch];
    }
    const history = [initialDefault];

    const invalidNumber = n => isNaN(parseInt(n, 10));
    const validateLast = () => history.length === 1;
    const getCurrentCopy = () => Array.from(history.at(-1));

    if (initialDefault.some(invalidNumber))
        throw new Error('Error occured while parsing version!');

    function _internal() {
        major = function () {
            const lastVersionCopied = getCurrentCopy();
            lastVersionCopied[0]++;
            [lastVersionCopied[1], lastVersionCopied[2]] = [0, 0];
            history.push(lastVersionCopied);
            return this;
        };
        minor = function () {
            const lastVersionCopied = getCurrentCopy();
            lastVersionCopied[1]++;
            lastVersionCopied[2] = 0;
            history.push(lastVersionCopied);
            return this;
        };
        patch = function () {
            const lastVersionCopied = getCurrentCopy();
            lastVersionCopied[2]++;
            history.push(lastVersionCopied);
            return this;
        };
        rollback = function () {
            if (validateLast()) throw new Error('Cannot rollback!');
            history.splice(-1, 1);
            return this;
        };
        release = function () {
            const [major, minor, patch] = history.at(-1);
            return `${major}.${minor}.${patch}`;
        };
        return {
            major,
            minor,
            patch,
            rollback,
            release,
        };
    }
    return new _internal();
};

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('VersionManager tests', () => {
        it('Initialization tests', () => {
            assert.strictEqual(vm().release(), '0.0.1', 'Default initial version');
            assert.strictEqual(vm('').release(), '0.0.1', 'Default initial version');
            assert.strictEqual(vm('1.2.3').release(), '1.2.3', 'No version changes');
            assert.strictEqual(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
            assert.strictEqual(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
            assert.strictEqual(vm('1').release(), '1.0.0', 'Default minor version is 0');
            assert.strictEqual(vm('1.1').release(), '1.1.0', 'Default patch is 0');
        });

        it('Major releases tests', () => {
            assert.strictEqual(vm().major().release(), '1.0.0', 'First major release');
            assert.strictEqual(
                vm('1.2.3').major().release(),
                '2.0.0',
                'Major release after 1.2.3',
            );
            assert.strictEqual(
                vm('1.2.3').major().major().release(),
                '3.0.0',
                'Second major release after 1.2.3',
            );
        });

        it('Minor releases tests', () => {
            assert.strictEqual(vm().minor().release(), '0.1.0', 'First minor relase');
            assert.strictEqual(
                vm('1.2.3').minor().release(),
                '1.3.0',
                'Minor release after 1.2.3',
            );
            assert.strictEqual(
                vm('1').minor().release(),
                '1.1.0',
                'Minor relase after 1',
            );
            assert.strictEqual(
                vm('4').minor().minor().release(),
                '4.2.0',
                'Second minor release after 4',
            );
        });

        it('Patch releases tests', () => {
            assert.strictEqual(vm().patch().release(), '0.0.2', 'First patch release');
            assert.strictEqual(
                vm('1.2.3').patch().release(),
                '1.2.4',
                'First patch release',
            );
            assert.strictEqual(
                vm('4').patch().patch().release(),
                '4.0.2',
                'Second patch release after 4',
            );
        });

        it('Rollbacks tests', () => {
            assert.strictEqual(
                vm().major().rollback().release(),
                '0.0.1',
                'Rollback of major release',
            );
            assert.strictEqual(
                vm().minor().rollback().release(),
                '0.0.1',
                'Rollback of minor release',
            );
            assert.strictEqual(
                vm().patch().rollback().release(),
                '0.0.1',
                'Rollback of patch release',
            );
            assert.strictEqual(
                vm().major().patch().rollback().release(),
                '1.0.0',
                'Rollback of patch after major release',
            );
            let m = vm().major().patch().rollback().major();
            assert.doesNotThrow(
                m.rollback.bind(m),
                undefined,
                undefined,
                'major -> patch -> rollback -> major -> rollback',
            );
            assert.strictEqual(
                m.release(),
                '1.0.0',
                'major -> patch -> rollback -> major -> rollback',
            );
            let m2 = vm().major().patch().rollback();
            assert.doesNotThrow(
                m2.rollback.bind(m2),
                undefined,
                undefined,
                'Multiple rollbacks right after another: major -> patch -> rollback -> rollback',
            );
            assert.strictEqual(
                m2.release(),
                '0.0.1',
                'Multiple rollbacks right after another: major -> patch -> rollback -> rollback',
            );
        });

        it('Seperated calls', () => {
            const m = vm('1.2.3');
            m.major();
            m.minor();
            assert.strictEqual(m.release(), '2.1.0');
        });

        it('Invalid initial versions', () => {
            for (const version of ['a', 'a.b.c', '1.a', '0.1.a.5']) {
                assert.throws(
                    () => vm(version),
                    Error,
                    'Error occured while parsing version!',
                    'Should throw when initial version cannot be parsed: ' +
                        JSON.stringify(version),
                );
            }
        });

        it('Invalid rollbacks', () => {
            let m = vm();
            assert.throws(m.rollback.bind(m), Error, 'Cannot rollback!');
            assert.doesNotThrow(
                m.major.bind(m),
                undefined,
                undefined,
                'VersionManager should still be useable after failed rollback',
            );
            assert.doesNotThrow(
                m.rollback.bind(m),
                undefined,
                undefined,
                'VersionManager can rollback once',
            );
            assert.throws(
                m.rollback.bind(m),
                Error,
                'Cannot rollback!',
                'Cannot rollback twice after one release',
            );
        });
    });
} else {
}
