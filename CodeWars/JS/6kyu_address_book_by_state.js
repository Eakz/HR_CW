// https://www.codewars.com/kata/59d0ee709f0cbcf65400003b/train/javascript

const stateMap = {
    AZ: 'Arizona',
    CA: 'California',
    ID: 'Idaho',
    IN: 'Indiana',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia'
}
function byState(str) {
    var map = {}
    str.split('\n').forEach(line => {
        if (line) {
            var state = line.slice(-2)
            if (!map[state]) map[state] = []
            map[state].push('..... ' + line.replace(/,/g, '').slice(0, -2) + stateMap[state])
        }
    })
    return Object.keys(stateMap)
        .filter(state => map[state])
        .map(state => ` ${stateMap[state]}\r\n${map[state].sort().join('\r\n')}`)
        .join('\r\n').slice(1)
}


var case0 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`
var case1 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`


var answer = "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"
console.log(byState(case0), answer)
answer = "California\r\n..... Amy Wilde 334 Bayshore Pkwy Mountain View California\r\n Massachusetts\r\n..... Eric Adams 20 Post Road Sudbury Massachusetts\r\n..... Hubert Sims 328A Brook Road Roanoke Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Oklahoma\r\n..... Orville Thomas 11345 Oak Bridge Road Tulsa Oklahoma\r\n Pennsylvania\r\n..... Terry Kalkas 402 Lans Road Beaver Falls Pennsylvania\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"
console.log(byState(case1), answer)
