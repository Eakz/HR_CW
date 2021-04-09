// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
function flyBy(lamps, drone){
    return 'o'.repeat(Math.min(lamps.length,drone.length))+lamps.slice(drone.length)
}


console.log(flyBy('xxxxxx', '====T'), 'ooooox');
console.log(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
