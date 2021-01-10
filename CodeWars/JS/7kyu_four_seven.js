// https://www.codewars.com/kata/5ff50f64c0afc50008861bf0/train/javascript


const fourSeven = n=>(n===7||n===4)&&{4:7,7:4}[n]||0


console.log(fourSeven(4), 7, "n = 4 should return 7");
console.log(fourSeven(7), 4, "n = 7 should return 4");
