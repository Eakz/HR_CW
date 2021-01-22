// https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript

const solve = (s,k)=>{
    if(k===0) return s
    let removed=0;
    let sS=s.split('');
    for(let i=97;i<123;i++){
        for(let ind=0;ind<sS.length;ind++){
            if(sS[ind].charCodeAt()===i){
                sS[ind]='';
                if(++removed>=k) return sS.join('')
            }
        }
    }
    return sS.join('')
};

console.log(solve('abracadabra', 1),'bracadabra');
console.log(solve('abracadabra', 2),'brcadabra');
console.log(solve('abracadabra', 6),'rcdbr');
console.log(solve('abracadabra', 8),'rdr');
console.log(solve('abracadabra', 50),'');
    