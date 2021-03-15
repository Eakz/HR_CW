// https://www.codewars.com/kata/603b2bb1c7646d000f900083/train/javascript

function shifter(s){
    if(s.length===0) return 0
    const noChange = ["H", "I", "N", "O", "S", "X", "Z", "M", "W"]
    return  [... new Set(s.split(' '))].filter(e=>e.split('').every(l=>noChange.includes(l))).length
}

const shifter = s => new Set( s.match( /\b[HINOSXZMW]+\b/g ) ).size ;