// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => [...(N ? Array(N).keys() : [])];

console.log(arr(), []);
console.log(arr(4), [0, 1, 2, 3]);
