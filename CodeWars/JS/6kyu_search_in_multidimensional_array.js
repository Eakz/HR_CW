const locate = (arr,value)=> {
    return arr.some((e)=> { return Array.isArray(e) ? locate(e, value) : e === value; });
}

console.log(locate(['a','b',['c','d',['e']]],'e')); // should return true
console.log(locate(['a','b',['c','d',['e']]],'a')); // should return true
console.log(locate(['a','b',['c','d',['e']]],'f')); // should return false
console.log(locate([ [ [ [Array], [Array] ] ] ], ',0.8428168444390085'
[ [ [ 0 ], [ [Array], [Array] ] ] ], ',0.8428168444390085'
[ [ 0 ], [ [ 1 ], [ [Array], [Array] ] ] ], ',0.8428168444390085'
[ 0 ] ',0.8428168444390085')); // should return true