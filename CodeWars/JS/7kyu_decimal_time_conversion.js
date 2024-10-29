// https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript

function toIndustrial(time) {
    let value = time;
    if(typeof time === 'string') {
        const [hours,minutes]=time.split(":")
        return +((parseInt(hours) + minutes/60).toFixed(2));
    }
    return +((value/60).toFixed(2))
}

function toNormal(time) {
    let minutes = +(time%1*0.6).toFixed(2)*100;
    let hours = time|0;
    if(minutes%60===0){
        return `${hours+1}:00`
    }
    return `${hours}:${(Math.round(minutes)).toString().padStart(2,'0')}`
}

if (require.main.path.includes('mocha')) {
    const { assert, config, expect } = require('chai');

    describe('Fixed tests', () => {
        it('toIndustrial() for int inputs', () => {
            expect(toIndustrial(1)).to.equal(0.02);
            expect(toIndustrial(2)).to.equal(0.03);
            expect(toIndustrial(105)).to.equal(1.75);
        });

        it('toIndustrial() for string inputs', () => {
            expect(toIndustrial('0:03')).to.equal(0.05);
            expect(toIndustrial('0:04')).to.equal(0.07);
            expect(toIndustrial('1:45')).to.equal(1.75);
        });

        it('toNormal() for float inputs', () => {
            expect(toNormal(1.5)).to.equal('1:30');
            expect(toNormal(0.33)).to.equal('0:20');
            expect(toNormal(69.99373876)).to.equal('70:00');
        });
    });
} else {
    console.log(toIndustrial(1), 0.02);
    console.log(toIndustrial(2), 0.03);
    console.log(toIndustrial(105), 1.75);
    console.log(toIndustrial('0:03'), 0.05);
    console.log(toIndustrial('0:04'), 0.07);
    console.log(toIndustrial('1:45'), 1.75);
    console.log(toNormal(1.5), '1:30');
    console.log(toNormal(0.33), '0:20');
    console.log(toNormal(69.99373876), '70:00');
    console.log(toNormal(15.02), '15:01');
}
