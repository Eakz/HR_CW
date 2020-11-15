// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function addArrays(array1, array2) {
    if(array1.length===0){
        return array2
    }else if(array2.length===0){
        return array1
    }
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    let result = arrayToNumber1 + arrayToNumber2
    let modif = result>0?1:-1;
    result=Math.abs(result)
    let arr = [...(result).toString().split('').map(e=>Number(e))]
    arr[0]*=modif
    return arr
 }
 console.log(addArrays([6,7], [6,7]), [ 1, 3, 4 ])
 console.log(addArrays([6,7], []))
 console.log(addArrays([], []))
