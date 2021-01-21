// https://www.codewars.com/kata/577c349edf78c178a1000108/train/javascript

const xMasTree = n =>[...Array(n+2)].map((e,i)=>{
    if(i>=n) return '_'.repeat(n-1)+'#'+'_'.repeat(n-1)
    let side = '_'.repeat(n-i-1)
    let middle='#'.repeat(i*2+1)
    return side+middle+side
})
console.log(xMasTree(3),['__#__', '_###_', '#####', '__#__', '__#__'])
// console.log(xMasTree(7),['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______'])
// console.log(xMasTree(2),['_#_', '###', '_#_', '_#_'] )
// console.log(xMasTree(4),['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'] )
// console.log(xMasTree(6),['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____'])