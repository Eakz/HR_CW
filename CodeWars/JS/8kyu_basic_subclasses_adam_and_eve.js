// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript

class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [
            new Man,
            new Woman
        ]
    }
}
// code

if (require.main.path.includes('mocha')) {
    const Test = require('chai');
    describe('GodTest', function () {
        it('Adam should be a Man', function () {
            let humans = God.create();
            Test.assert.equal(
                humans[0] instanceof Man,
                true,
                'Expected Adam to be a Man',
            );
        });
    });
} else {
    let humans = God.create();
    console.log(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
}
