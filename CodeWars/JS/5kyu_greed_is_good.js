// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

const combination_values = {
    1: {
        1: 100,
        3: 1000,
    },
    2: {
        3: 200,
    },
    3: {
        3: 300,
    },
    4: {
        3: 400,
    },
    5: {
        1: 50,
        3: 500,
    },
    6: {
        3: 600,
    },
};
function score(dice) {
  const count = dice.reduce((acc,e)=>({...acc, [e]:(acc[e]||0)+1}),{});
  const cleanValues = Array.from(new Set(dice));
  return cleanValues.reduce((acc,v)=>{
    const valueCount = count[v];
    const count3s = Math.floor(valueCount/3);
    const v3= combination_values[v]?.[3]||0;
    const v1= combination_values[v]?.[1]||0;
    console.log({
      v,
      v3,
      v1
    })
    return acc+count3s*v3+v1*(valueCount-count3s*3)
  },0)

}

if (require.main.path.includes('mocha')) {
    describe('Scorer Function', function () {
        it('should value this as worthless', function () {
            Test.expect(score([2, 3, 4, 6, 2]) == 0, 'Should be 0 :-(');
        });

        it('should value this triplet correctly', function () {
            Test.expect(score([4, 4, 4, 3, 3]) == 400, 'Should be 400');
        });

        it('should value this mixed set correctly', function () {
            Test.expect(score([2, 4, 4, 5, 4]) == 450, 'Should be 450');
        });     
        it('should value this mixed set correctly', function () {
            Test.expect(score([ 1, 1, 1, 3, 3 ]) == 1000, 'Should be 1000');
        });      
        it('should value this mixed set correctly', function () {
            Test.expect(score([ 1, 1, 1, 1, 3 ]) == 1100, 'Should be 1100');
        });
    });
} else {
    // console.log(score([2, 3, 4, 6, 2]), 0, 'Should be 0 :-(');
    // console.log(score([4, 4, 4, 3, 3]), 400, 'Should be 400');
    // console.log(score([2, 4, 4, 5, 4]), 450, 'Should be 450');
    console.log(score([ 1, 1, 1, 3, 3 ]), 1000, 'Should be 1000');
    console.log(score([ 1, 1, 1, 1, 3 ]), 1100, 'Should be 1100');

}
