// https://www.codewars.com/kata/5ac739ed3fdf73d3f0000048/train/javascript

const Not = A => A(False)(True)
const And = A => B => A(B)(A)
const Or = A => B => A(A)(B)
const Xor = A => B => A(Not(B))(B)

console.log(Not(True)); // false, "Not(True) is False");
console.log(And(True)(True)); // true, "And(True)(True) is True");
console.log(And(True)(False)); // false, "And(True)(False) is False");
console.log(Or(True)(False)); // true, "Or(True)(False) is True");
console.log(Or(False)(False)); // false, "Or(False)(False) is False");
console.log(Xor(True)(True)); // false, "Xor(True)(True) is False");
console.log(Xor(True)(False)); // true, "Xor(True)(False) is True");
