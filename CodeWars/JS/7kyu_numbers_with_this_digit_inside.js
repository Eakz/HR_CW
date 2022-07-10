// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

function numbersWithDigitInside(x, d) {
    const numbers = []
    for(let i=1; i<=x;i++){
        if(i.toString().includes(d)){
            numbers.push(i)
        }
    }
    return numbers.length?[numbers.length,...numbers.reduce((acc,e)=>[acc[0]+e,acc[1]*e],[0,1])]:[0,0,0]
  }


  if (process.mainModule.path.includes('mocha')) {
const assert=require('chai').assert

describe("Solution", function(){
  it("Basic Tests", function(){
    assert.deepEqual(numbersWithDigitInside(5,6), [ 0, 0, 0 ]);
    assert.deepEqual(numbersWithDigitInside(1,0), [ 0, 0, 0 ]);
    assert.deepEqual(numbersWithDigitInside(7,6), [ 1, 6, 6 ]);
    assert.deepEqual(numbersWithDigitInside(11,1), [ 3, 22, 110 ]);
    assert.deepEqual(numbersWithDigitInside(20,0), [ 2, 30, 200 ]);
    assert.deepEqual(numbersWithDigitInside(44,4), [ 9, 286, 5955146588160 ]);
  });
});
  }else{
    console.log(numbersWithDigitInside(5,6), [ 0, 0, 0 ]);
    console.log(numbersWithDigitInside(1,0), [ 0, 0, 0 ]);
    console.log(numbersWithDigitInside(7,6), [ 1, 6, 6 ]);
    console.log(numbersWithDigitInside(11,1), [ 3, 22, 110 ]);
    console.log(numbersWithDigitInside(20,0), [ 2, 30, 200 ]);
    console.log(numbersWithDigitInside(44,4), [ 9, 286, 5955146588160 ]);
  }