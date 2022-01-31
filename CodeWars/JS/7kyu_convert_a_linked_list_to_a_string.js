// https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function stringify(list) {
    const stringToBe = [];
    function getAlist(l) {
        if(l===null){
            stringToBe.push('null');
            return
        }
        stringToBe.push(l.data);
        getAlist(l.next);
    }
    getAlist(list);
    return stringToBe.join(' -> ');
}

// function stringify(list) {
//     return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
//   }

console.log(stringify(new Node(1, new Node(2, new Node(3)))), '1 -> 2 -> 3 -> null');
console.log(
    stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
    '0 -> 1 -> 4 -> 9 -> 16 -> null',
);
console.log(stringify(null), 'null');
  const {assert} = require("chai");

  describe("stringify()", () => {
    it("should pass the example tests as shown in the Description", () => {
  assert.strictEqual(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
      assert.strictEqual(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
      assert.strictEqual(stringify(null), "null");
    });
  });
