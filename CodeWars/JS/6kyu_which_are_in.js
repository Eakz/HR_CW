// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1,array2){
    return array1.filter(e=>array2.some(e2=>e2.includes(e))).sort()
  }



  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
  a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
  a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
  a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])
