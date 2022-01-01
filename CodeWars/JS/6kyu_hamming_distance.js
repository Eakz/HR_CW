// https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1/train/javascript

// Original solution
const hammingDistance = (a, b) => {
    const aBin = a.toString(2);
    const bBin = b.toString(2);
    const maxLength = Math.max(aBin.length, bBin.length);
    const aBinPadded = aBin.padStart(maxLength,'0');
    const bBinPadded = bBin.padStart(maxLength,'0');
    let result = 0;
    for(let i=0; i<maxLength;i++){
        if(aBinPadded[i]!==bBinPadded[i]){
            result++
        }
    }
    return result
};
// Refactored solution - perfect usecase for XOR 
const hammingDistance=(a, b)=>(a ^ b).toString(2).replace(/0/g, '').length;


console.log(hammingDistance(25, 87), 4);
console.log(hammingDistance(256, 302), 4);
console.log(hammingDistance(543, 634), 4);
console.log(hammingDistance(34013, 702), 7);
