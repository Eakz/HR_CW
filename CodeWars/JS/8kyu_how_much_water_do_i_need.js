// https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript



const howMuchWater = (w,l,c)=>{
    if(c/l>2) return 'Too much clothes'
    if(c/l<1) return 'Not enough clothes'
    return Number((w*1.1**(c-l)).toFixed(2))
}

console.log(howMuchWater(10,10,21), 'Too much clothes','');
console.log(howMuchWater(10,10,2), 'Not enough clothes','');
console.log(howMuchWater(10,11,20), 23.58,'');
console.log(howMuchWater(50,15,29), 189.87,'');
