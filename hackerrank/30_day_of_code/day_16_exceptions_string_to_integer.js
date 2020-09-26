// This works even tho its totally fucked up... HR mistake

function main() {
    var S = readLine();
    try {
        S != Number(S) && err();
        console.log(Number(S));
    } catch (err) {
        console.log("Bad String");
    }
}
