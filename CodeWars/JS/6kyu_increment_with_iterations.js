// https://www.codewars.com/kata/5ecc16daa200d2000165c5b1/train/javascript

function increment(number, iterations, spacer) {
    const nom = [...number.toString(10)].map(a=>parseInt(a));
    // console.log(nom);
    let start=0;
    for (let i = 0; i<iterations;i++){
        let index = (start+spacer)%nom.length;
        nom[index]++;
        start=index;
        const equalize=()=>{
            while(nom.some(a=>a>=10)){
                for(ins=nom.length;ins>=0;ins--){
                    if(nom[ins]>=10&&nom[ins-1]!==undefined){
                        nom[ins]-=10;
                        nom[ins-1]++;
                    }else if(nom[ins]>=10){
                        nom[ins]-=10;
                        nom.unshift(1);
                        start++;
                    }
                }
            }
    }
        equalize();
        }
    return parseInt(nom.map(a=>a.toString(10)).join(''));
}
increment=(n,i,s,p=0)=>[...Array(i)].reduce(m=>(l=(""+m).length,p=(p+s)%l,m+=+("1e"+(l-1-p)),p+=(""+m).length>l,m),n)
// console.log(increment(123, 5, 2)); // 245);
// console.log(increment(14123, 15, 6)); // 47456)
console.log(increment(9999, 9, 9)); // 32211);
