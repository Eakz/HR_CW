// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

const pyramid = n => {
    if(n===1) return 1;
    let currentCount = 0
    let pivot = 1;
    while(currentCount<=n){
        currentCount+=pivot;
        pivot++
    }
    return pivot-2
}



console.log(pyramid(1) , 1);
console.log(pyramid(4) , 2);
console.log(pyramid(20) , 5);
console.log(pyramid(100) , 13);
console.log(pyramid(9999) , 140);
console.log(pyramid(2211) , 66);
