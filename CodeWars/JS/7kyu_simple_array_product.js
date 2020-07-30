// https://www.codewars.com/kata/5d0365accfd09600130a00c9/train/javascript

function solve(sets){
    const {abs, max, min} = Math;
    const minMaxPairs = sets.map(set => [max(...set), min(...set)]);
    
    const possibleProducts = minMaxPairs.reduce((accumulator, current) => [    
        min(...accumulator) * max(...current),
        min(...accumulator) * min(...current),
        max(...accumulator) * min(...current),
        max(...accumulator) * max(...current),
      ]
    )
    
    return max(...possibleProducts)
  }
console.log(
    solve([
        [1, 2],
        [3, 4],
    ]),
); //8);
console.log(
    solve([
        [10, -15],
        [-1, -3],
    ]),
); //45);
console.log(
    solve([
        [-1, 2, -3, 4],
        [1, -2, 3, -4],
    ]),
); //12);
console.log(
    solve([
        [-11, -6],
        [-20, -20],
        [18, -4],
        [-20, 1],
    ]),
); //17600);
console.log(
    solve([
        [14, 2],
        [0, -16],
        [-12, -16],
    ]),
); //3584);
console.log(
    solve([
        [-3, -4],
        [1, 2, -3],
    ]),
); //12);
