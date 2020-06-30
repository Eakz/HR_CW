// https://www.codewars.com/kata/5736378e3f3dfd5a820000cb/train/javascript

function busTimer(time) {
    time = time.split(':');
    let [hours,minutes] = time.map(a=>parseInt(a)); 
    minutes = (hours * 60 +5+ minutes) % (60  * 24);
    if(minutes>0 && minutes<360){
        return 360-minutes;
    }
    return Math.floor((minutes+14)/15)*15-minutes;
}
console.log(busTimer("10:00")); // 10);
console.log(busTimer("15:05")); // 5);
console.log(busTimer("06:10")); // 0);
