function fizzBuzzCuckooClock(time) {
    const [unrefinedHours, minutes] = time.split(':').map(e => +e);
    const cuckoo = 'Cuckoo',
        fizz = 'Fizz',
        buzz = 'Buzz';
    const hours = unrefinedHours % 12 || 12;
    const toFiz = minutes % 3 === 0;
    const toBuzz = minutes % 5 === 0;
    if (minutes === 30) return cuckoo;
    if (!minutes) return Array(hours).fill(cuckoo).join(' ');
    if (toBuzz && toFiz) return `${fizz} ${buzz}`;
    if (toFiz) return fizz;
    if (toBuzz) return buzz;
    return 'tick';
}

if (require.main.path.includes('mocha')) {
    const Test = require('chai');

    describe('Basic times tests', () => {
        it('13:34', function () {
            Test.assert.equal(fizzBuzzCuckooClock('13:34'), 'tick');
        });
        it('21:00', function () {
            Test.assert.equal(
                fizzBuzzCuckooClock('21:00'),
                'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo',
            );
        });
        it('11:15', function () {
            Test.assert.equal(fizzBuzzCuckooClock('11:15'), 'Fizz Buzz');
        });
        it('03:03', function () {
            Test.assert.equal(fizzBuzzCuckooClock('03:03'), 'Fizz');
        });
        it('14:30', function () {
            Test.assert.equal(fizzBuzzCuckooClock('14:30'), 'Cuckoo');
        });
        it('08:55', function () {
            Test.assert.equal(fizzBuzzCuckooClock('08:55'), 'Buzz');
        });
        it('00:00', function () {
            Test.assert.equal(
                fizzBuzzCuckooClock('00:00'),
                'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo',
            );
        });
        it('12:00', function () {
            Test.assert.equal(
                fizzBuzzCuckooClock('12:00'),
                'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo',
            );
        });
    });
} else {
    console.log(
        fizzBuzzCuckooClock('12:00'),
        'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo',
    );
    console.log(fizzBuzzCuckooClock('13:34'), 'tick');
    console.log(
        fizzBuzzCuckooClock('21:00'),
        'Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo',
    );
    console.log(fizzBuzzCuckooClock('03:03'), 'Fizz');
}
