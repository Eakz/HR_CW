process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
const limit = 1000000
let primeSums = Array(limit).fill(0)
let a = Array(limit).fill(true)
a[0]=false;
a[1]=false;
for(let i=2;i<limit;i++){
    if(a[i]){
        primeSums[i]=primeSums[i-1]+i
        for(let j=i*i;j<limit;j+=i){
            a[j]=false
        }
        }else{
            primeSums[i]=primeSums[i-1]
    }
}
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(primeSums[n])
    }

}
