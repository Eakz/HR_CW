// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

const incrementer=(nums) =>!nums.length?[]:nums.map((e,i)=>(e+i+1)%10)
console.log(incrementer([]), [])
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8])
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4])
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2])
