// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

function hexStringToRGB(hexString) {
    const hex=hexString.slice(1);
    const list = [];
  for(let i=0; i<6;i+=2){
    list.push(hex.slice(i,i+2));
  };
  const result={};
  const colors = ['r','g','b'].forEach((a,n)=>result[a]=parseInt(list[n],16));

  return result;
}

function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  }
console.log(hexStringToRGB("#FF9933")) // {r:255, g:153, b:51});
