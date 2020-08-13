// https://www.hackerrank.com/challenges/array-left-rotation/problem

const rotate = (l,rot)=>{
    let revs = l.reverse()
    let resultArray = new Array(l.length)
    revs.forEach((e,i)=>{
        resultArray[(i+rot)%l.length]=e
    })
    console.log(resultArray.reverse().join(' '))
};

// Test Cases
console.log(rotate([1,2,3,4,5],4),' === ','5 1 2 3 4')
