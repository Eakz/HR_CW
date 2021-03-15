// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

const descendingOrder =n=>parseInt(n.toString().split('').sort().reverse().join(''))

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)