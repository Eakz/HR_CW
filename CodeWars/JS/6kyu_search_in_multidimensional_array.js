const locate = (arr,value)=> {
    return arr.some((e)=> { return Array.isArray(e) ? locate(e, value) : e === value; });
}

console.log(locate(['a','b',['c','d',['e']]],'e')); // should return true
console.log(locate(['a','b',['c','d',['e']]],'a')); // should return true
console.log(locate(['a','b',['c','d',['e']]],'f')); // should return false
