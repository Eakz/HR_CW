// https://www.codewars.com/kata/57ee31c5e77282c24d000024

function paul(x){
    const dict ={kata : 5,
        "Petes kata" : 10,
        life : 0,
        eating : 1,}
    const h=x.reduce((acc,e)=>acc+dict[e],0)
    switch(true){
        case (h<40):
            return 'Super happy!';
        case (h<70):
            return 'Happy!';
        case (h<100):
            return 'Sad!'
        default:
            return 'Miserable!'
    }
}

console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
