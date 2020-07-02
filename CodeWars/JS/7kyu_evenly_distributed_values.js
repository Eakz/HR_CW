// https://www.codewars.com/kata/5bb50eb68f8bbdb4b300021d/train/javascript

const distributeEvenly = (array) => {
    const primer = new Set(array);
    let result = [];
    while (array.length>0) {
        for (let i of primer) {
            if (array.find((a) => a === i)) {
                array.splice(array.indexOf(i), 1);
                result.push(i);
            }
        }
    }
    return result;
};
[].splice();
const arg = ["one", "one", "two", "two", "three", "three", "four", "one"];
const res = ["one", "two", "three", "four", "one", "two", "three", "one"];
console.log(distributeEvenly(arg), res);
