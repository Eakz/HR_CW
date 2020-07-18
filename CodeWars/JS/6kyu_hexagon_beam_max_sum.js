// https://www.codewars.com/kata/5ecc1d68c6029000017d8aaf/train/javascript

function maxHexagonBeam(n,seq){
    let i_hex, j_hex;    
    let hex = [];
    let i_seq = 0;
    
    for (i_hex = 0; i_hex >= 0; (hex.length < n ? i_hex++ : i_hex--)) {
      hex.push([]);
      for (j_hex = 0; j_hex < n + i_hex; j_hex++) {
        hex[hex.length-1].push(seq[i_seq]);
        i_seq = (i_seq + 1) % seq.length;
      }
    }
        
    let maxSum = Math.max(...hex.map(arr=>arr.reduce((a,b) => a+b,0)));
    let hexCopy = hex.map(arr=>arr.slice());
    let newSums;
    
    for (j_hex = 0; j_hex < 2*n-1; j_hex++)
    {
      newSums = [0,0];
      for (i_hex = Math.max(0, j_hex+1-n); i_hex < Math.min(j_hex+n, 2*n-1); i_hex++) {
        newSums[0] += hex[i_hex].shift();
        newSums[1] += hexCopy[i_hex].pop();
      }
      maxSum = Math.max(maxSum, ...newSums);
    }
    
    return maxSum;
}


console.log(maxHexagonBeam(2,[5,8,3,8])); //24
console.log(maxHexagonBeam(3,[1,3,5,7])); //23
console.log(maxHexagonBeam(4,[2,4,6,8])); //34
console.log(maxHexagonBeam(5,[1,0,4,-6])); //9
console.log(maxHexagonBeam(5,[2])); //18
    