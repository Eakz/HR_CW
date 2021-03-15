// https://www.codewars.com/kata/5932c94f6aa4d1d786000028

function perfectRoots(n){
  const roots = [2,4,8]
  for (let r of roots){
    if(((n**(1/r))|0)!==n**(1/r)) return false

  }
  return true
}
console.log(perfectRoots(256),true)
console.log(perfectRoots(1000),false)
console.log(perfectRoots(6561),true)