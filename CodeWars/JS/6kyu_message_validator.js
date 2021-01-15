// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript

isAValidMessage=m=>!m.replace(/(\d+)(\D+)/g,(_,a,b)=>a==b.length?"":1)

console.log(isAValidMessage("3hey5hello2hi"), true);
console.log(isAValidMessage("4code13hellocodewars"), true);
console.log(isAValidMessage("3hey5hello2hi5"), false);
console.log(isAValidMessage("code4hello5"), false);
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee"), true);
console.log(isAValidMessage(""), true);
    
