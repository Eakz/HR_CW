function toNumber (arr) { return arr.map(function (i) { return Number(i); })}

function nodesAtDepth(root, depth, current) {
    current = current || 1;
    if (depth === current) {
        return [root];
    } else {
        return (
            [].concat(root.left ? nodesAtDepth(root.left, depth, current + 1) : [])
              .concat(root.right ? nodesAtDepth(root.right, depth, current + 1) : []));
    }
}

function inOrderTraversal(root) {
    var out = [];
    if (root.left) out = out.concat(inOrderTraversal(root.left));
    out.push(root.val);
    if (root.right) out = out.concat(inOrderTraversal(root.right));
    return out;
}

function TNode(v, l, r) {
    this.val = v;
    this.right = r || undefined;
    this.left = l || undefined;
} 
    
TNode.prototype.swap = function () {
    tmp = this.right;
    this.right = this.left;
    this.left = tmp;
}

function swap(root, k, max) {
    var d = k, i = 2;
    while (d <= max) {
        nodesAtDepth(root, d, 1).forEach(function (node) { node.swap(); });
        d = i * k;
        i++;
    }
    console.log(inOrderTraversal(root).join(' '));
}

function processData(input) {
    
    var lines = input.split('\n').reverse();
    
    var n = Number(lines.pop().split());
    var nodes = new Array(n+1);
    
    var _index, _lr, i, k;
    
    for (i = 0; i < n ; i++) {
        _index = i + 1;
        nodes[_index] = new TNode(_index);
    }
    
    for (i = 0; i < n ; i++) {
        _index = i + 1;
        _lr = toNumber(lines.pop().split(' '));
        if (_lr[0] > -1) nodes[_index].left = nodes[_lr[0]];
        if (_lr[1] > -1) nodes[_index].right = nodes[_lr[1]];
    }
    
    var ops = Number(lines.pop());
    for (var j = 0; j < ops; j++) {
        k = Number(lines.pop()) ;
        swap(nodes[1], k, n - 1);
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
