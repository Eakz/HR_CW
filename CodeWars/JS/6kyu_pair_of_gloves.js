// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves)
{
 return gloves.reduce((acc,a)=>{
    const total = acc.total
    if(acc[a]){
        acc.total++
        delete acc[a]
    }else{
        acc[a]=true
    }
    return acc
 },{total:0}).total
}


        let tests = [
          [['red','red'],1],
          [['red','green','blue'],0],
          [['gray','black','purple','purple','gray','black'],3]
        ];

        tests.forEach(a=>{
           console.log(numberOfPairs(a[0]),a[1], `Testing for ${a[0]}`);
        });
