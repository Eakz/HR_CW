'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let aList = a.split('');
    let bList = b.split('');
    let aListCopy = [...aList];
    let bListCopy = [...bList];
    var count =0;
    console.log(aList,bList);
    aList = aList.filter(l=>{
        if(bListCopy.includes(l)){
            bListCopy.splice(bListCopy.indexOf(l),1)
            return true;
        }else{
            count++;
            return false;
        }
    });
    bList = bList.filter(l=>{
        if(aListCopy.includes(l)){
            aListCopy.splice(aListCopy.indexOf(l),1)
            return true;
        }else{
            count++;
            return false;
        }
    });
    console.log("blist",bList);
    console.log("aList",aList);
    console.log("count",count);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
