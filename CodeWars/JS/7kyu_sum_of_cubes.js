// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

const sumCubes = (n,s=0) =>{
    if(n===0) return s
    return sumCubes(n-1,s+n**3)
}

