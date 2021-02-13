// https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript

  const  elevatorDistance= a=>a.slice(0,-1).reduce((ac,_,i)=>ac+Math.abs(a[i]-a[i+1]),0)
  
  console.log(elevatorDistance([5,2,8]), 9);
  console.log(elevatorDistance([1,2,3]), 2);
  console.log(elevatorDistance([7,1,7,1]), 18);
  
  
  