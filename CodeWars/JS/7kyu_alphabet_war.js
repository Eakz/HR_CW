// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight)
{   
    const inc=(obj,e)=>Object.keys(obj).includes(e)
    const leftSide = {
        w:4,p:3,b:2,s:1
    }
    const rightSide={
        m:4,q:3,d:2,z:1
    }
    let l=0,r=0;
    [...fight].forEach(e=>{
        if(inc(leftSide,e)){
            l+=leftSide[e]
        }
        if(inc(rightSide,e)){
            r+=rightSide[e]
        }
    })
   return r===l?"Let's fight again!":r>l?"Right side wins!":"Left side wins!";
}
// console.log( alphabetWar("z") , "Right side wins!" );
// console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
// console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );