// https://www.codewars.com/kata/5a2c343e8f27f2636c0000c9/train/javascript

function shortest(N, edgeList) {
    let arr = new Array(N)
        .fill()
        .map((_, i) => [i, { edges: [], dist: Number.MAX_SAFE_INTEGER }]);
    let nodes = new Map(arr);
    nodes.get(N - 1).dist = 0;
    for (let edge of edgeList) {
        let [from, to, dist] = edge;
        nodes.get(to).edges.push(edge);
    }

    for (let i = N - 1; i >= 0; i--) {
        let node = nodes.get(i);
        for (let [from, to, dist] of node.edges) {
            let fromNode = nodes.get(from);
            if (fromNode.dist > node.dist + dist) {
                fromNode.dist = node.dist + dist;
            }
        }
    }

    if (Number.MAX_SAFE_INTEGER == nodes.get(0).dist) {
        return -1;
    }
    return nodes.get(0).dist;
}

// console.log(
//     shortest(4, [
//         [0, 1, 1],
//         [0, 2, 5],
//         [0, 3, 5],
//         [1, 3, 3],
//         [2, 3, 1],
//     ]),
//     4,
// );
console.log(
    shortest(3, [
        [0, 1, 7],
        [1, 2, 5],
        [0, 2, 12],
    ]),
    12,
);
// console.log(
//     shortest(5, [
//         [0, 2, 1],
//         [1, 2, 1],
//         [0, 3, 1],
//         [1, 4, 1],
//     ]),
//     -1,
// );
