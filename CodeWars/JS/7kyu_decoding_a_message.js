function decode(message){
  return [...message].map(e=>/[A-Za-z]/.test(e)?String.fromCharCode(25-(e.charCodeAt()-96)+98):e).join('')
}


console.log(decode("sr"),"hi")
console.log(decode("svool"),"hello")
55