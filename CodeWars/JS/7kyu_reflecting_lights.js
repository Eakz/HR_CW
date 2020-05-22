// https://www.codewars.com/kata/5eaf88f92b679f001423cc66

const reflections=(maxX, maxY)=>(maxX & -maxX) == (maxY & -maxY);

console.log(reflections(10, 10), true);
console.log(reflections(10, 20), false);
console.log(reflections(12, 23), false);
console.log(reflections(5, 25), true);
