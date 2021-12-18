// https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript

function peak(arr){
    const sum =(arr)=>arr.length?arr.reduce((a,b)=>a+b):NaN
    return arr.reduce((acc,_ele,i,a)=>{
        if(sum(a.slice(0,i))===sum(a.slice(i+1))){
            return i
        }
        return acc
    },-1)
   }



console.log(peak([1,2,3,5,3,2,1]),3);
console.log(peak([1,12,3,3,6,3,1]),2);
console.log(peak([10,20,30,40]),-1);
