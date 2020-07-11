// https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript

function decomp(n) {
    let res = 1;
    let result = {};
    let primes = generatePrime(n);
    while (n > 1) {
        res *= n;
        n--;
        for (let i = 0; i < primes.length; i++) {
            while (res % primes[i] === 0) {
                res /= primes[i];
                if (result[primes[i]]) {
                    result[primes[i]]++;
                } else {
                    result[primes[i]] = 1;
                }
            }
        }
    }
    res===1?null:result[res]?result[res]++:result[res]=1;
    res=[];
    for(key of Object.keys(result)){
        if(result[key]>1){
        res.push(`${key}^${result[key]}`);
        }else{
            res.push(`${key}`)
        }
    };
    return res.join(' * ');
}
function generatePrime(n) {
    let res = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


// AFTER refactoring

function decomp(n) {
    let r = {}
    for (let nb = 2; nb <= n; nb++) {
      let m = nb
      for (var mb = 2; mb <= m; mb++){
        while(m % mb === 0) {
          m /= mb
          r[mb] = (r[mb] || 0) + 1
        }
      }
      if (m > 1) 
        r[m] = (r[m] || 0) + 1
    }
    return Object.keys(r).map(e => r[e] > 1 ? e +"^" + r[e] : e).join` * `
  }
// console.log(decomp(17)); // "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17")
// console.log(decomp(5)); // "2^3 * 3 * 5")
console.log(decomp(22)); // "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19")
console.log(decomp(14)); // "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13")
console.log(decomp(25)); // "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23")
