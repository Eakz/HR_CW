// https://www.codewars.com/kata/59f2746e50c8c2b55d000085/train/javascript

conv=n=>(n+='').replace(/./g,(d,i)=>(n.length^d)&1?d:((w='zeroZERO|ONEone|twoTWO|THREEthree|fourFOUR|FIVEfive|sixSIX|SEVENseven|eightEIGHT|NINEnine'.split`|`[d])+w+w).slice(0,i+1))
console.log(conv(0), "0")
console.log(conv(11), "11")
console.log(conv(1101), "11zer1")
console.log(conv(54563), "F4FIV6THREE")
console.log(conv(47309534), "f73zero953fourFOUR")
console.log(conv(34266262106), "T4266262ONEoneONE06")
console.log(conv(15795379351687), "15795379351sixSIXsixSIXeightEIGHTeig7")
console.log(conv(157953793516872), "OFISEVNINEFIVEfTHREEtSEVENseNINEnineTHREEthreFIVEfiveFIONEoneONEon68SEVENsevenSEVE2")
