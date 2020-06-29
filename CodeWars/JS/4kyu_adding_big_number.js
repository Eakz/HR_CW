// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
        if(a.length<b.length){
            [a,b]=[b,a];
        }
        let result = '';
        let letr1,letr2,tmp,sum,next=0;
        for (let i=0; i<a.length;i++){
            letr1 = parseInt(a[a.length-1-i]);
            letr2 = parseInt(b[b.length-1-i]);
            letr2 = letr2?letr2:0;
            tmp = (next+letr1+letr2).toString();
            sum = tmp.charAt(tmp.length-1);
            next = parseInt(tmp.substr(0,tmp.length-1));
            next = next?next:0;
            result = (i === a.length-1)?tmp+result:sum+result;
        }
        return result;
    
}
console.log(add("1", "1")); // "2");
console.log(add("123", "456")); // "579");
console.log(add("888", "222")); // "1110");
console.log(add("1372", "69")); // "1441");
console.log(add("12", "456")); // "468");
console.log(add("456", "12")); // "468");
console.log(add("101", "100")); // "201");
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963")
console.log(add("90938498237058927340892374089","63829983432984289347293874")); // "91002328220491911630239667963")
