// https://www.codewars.com/kata/5f7a715f6c1f810017c3eb07/train/javascript
const push = "push",
    end = "end",
    add = "add",
    sub = "sub",
    mul = "mul",
    div = "div";
var list = [];
const reset = () => {
    let result = list[0];
    list = [];
    return result;
};
const start = action => {
    switch (action) {
        case "push":
            return n => {
                list.unshift(n);
                return start(n);
            };
        case "add":
            return n => {
                let a = list.shift();
                let b = list.shift();
                list.unshift(a + b);
                return start(n);
            };
        case "sub":
            return n => {
                let a = list.shift();
                let b = list.shift();
                list.unshift(a - b);
                return start(n);
            };
        case "mul":
            return n => {
                let a = list.shift();
                let b = list.shift();
                list.unshift(a * b);
                return start(n);
            };
        case "div":
            return n => {
                let a = list.shift();
                let b = list.shift();
                list.unshift(~~(a / b));
                return start(n);
            };
        case "end":
            return reset();
        default:
            return n => start(n);
    }
};
// console.log(start(push)(5)(end));
// console.log(list);
console.log(start(push)(5)(push)(3)(add)(end), 8);
console.log(start(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(mul)(end), 48);
console.log(start(push)(4)(push)(9)(div)(end), 2);
console.log(start(push)(5)(push)(8)(push)(1)(add)(add)(end), 14);
console.log(start(push)(3)(push)(5)(sub)(end), 2);
console.log(start(push)(8)(push)(9)(push)(3)(mul)(mul)(end), 216);
console.log(start(push)(1)(push)(1)(add)(push)(2)(add)(end), 4);
console.log(start(push)(4)(push)(9)(div)(end), 2);
