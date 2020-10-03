// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    // while loop variant - without queue - or so called row-que
    // this.levelOrder = function (root) {
    //     let result = [root];
    //     let hasChilden = root.left || root.right ? true : false;
    //     let row = result;
    //     while (hasChilden) {
    //         let currentRow = [];
    //         for (let n of row) {
    //             if (n.left && n.right) {
    //                 currentRow.push(n.left, n.right);
    //             } else if (n.left) {
    //                 currentRow.push(n.left);
    //             } else if (n.right) {
    //                 currentRow.push(n.right);
    //             }
    //         }
    //         result = result.concat(currentRow);
    //         row = currentRow;
    //         hasChilden = currentRow.some(e => e.left || e.right);
    //     }
    //     console.log(...result.map(e => e.data));
    //     // Add your code here
    //     // To print values separated by spaces use process.stdout.write(someValue + ' ')
    // }; // End of function levelOrder

    // levelOrder using global que
    this.levelOrder = function (root) {
        let q = root ? [root] : [];
        let result = [];
        while (q.length > 0) {
            let cNode = q.pop();
            result.push(cNode.data);
            if (cNode.left) q.unshift(cNode.left);
            if (cNode.right) q.unshift(cNode.right);
        }
        console.log(...result);
    };
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function (data) {
    _input += data;
});

process.stdin.on("end", function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split("\n").map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    tree.levelOrder(root);
});
