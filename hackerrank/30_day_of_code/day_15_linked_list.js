// https://www.hackerrank.com/challenges/30-linked-list/problem


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
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function io(head,data){
        let cursor=head;
        if(head === null){
            return new Node( data);
        }
        while(head.next!==null){
            head=head.next
        }
        if(head.next === null){
            head.next = new Node(data);
            return cursor

    }}

	this.display=function(head){