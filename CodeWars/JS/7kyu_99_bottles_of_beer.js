// https://www.codewars.com/kata/52a723508a4d96c6c90005ba

var sing = function () {
  const bottles = [...Array(200).keys()]
    let even =n=>`${n!==0?n:'No more'} bottle${n!==1?'s':''} of beer on the wall, ${n!==0?n:'no more'} bottle${n!==1?'s':''} of beer.`
    let odd=n=>`Take one down and pass it around, ${n!==0?n:'no more'} bottle${n!==1?'s':''} of beer on the wall.`
    let last = 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    let n=99
    return bottles.map(e=>{
        if(e===199) return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        if(e%2===0){
            return even(n)
        }else{
            n--
            return odd(n)
        }
    })
  };

let song=sing()
console.log(song.slice(0,5).join('\n'))
console.log(song[0], '99 bottles of beer on the wall, 99 bottles of beer.');
console.log(song[199], 'Go to the store and buy some more, 99 bottles of beer on the wall.');
