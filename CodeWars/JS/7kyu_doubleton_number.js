// https://www.codewars.com/kata/604287495a72ae00131685c7/train/javascript

const doubleton = n=>{
    let next =n+1
    while(true){
        const isD = new Set(next.toString().split(''))
        if([...isD].length===2) return next
        next++
    }
}