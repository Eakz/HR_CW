// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

function loop_size(node){
    var nodes = [], n = node;
    
    while (nodes.indexOf(n) === -1) {
      nodes.push(n);
      n = n.getNext();
    }
    
    return nodes.length - nodes.indexOf(n);
  }