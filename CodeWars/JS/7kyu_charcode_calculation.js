// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

const calc = s=>6*s.split('').reduce((acc,e)=>{
let sevens=0
for (let character of e.charCodeAt().toString()){
    if(character.includes('7')) sevens++
}
return acc+sevens
},0)

// Codewars solution
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6

console.log(calc('ABC'), 6);
console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6); 
console.log(calc('aaaaaddddr'), 30); 
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
