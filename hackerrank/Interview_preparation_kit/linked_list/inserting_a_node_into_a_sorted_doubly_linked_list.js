// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

function sortedInsert(head, data) {
    let li = [...unpackList(head), data];
    li.sort((a, b) => a - b);
    return packList(li);
}
const unpackList = (head, list = []) => {
    if (!head.next) {
        list.push(head.data);
        return list;
    }
    list.push(head.data);
    return unpackList(head.next, list);
};
const packList = list => {
    let head = {},
        current = head,
        prev;
    while (list.length > 0) {
        if (prev) {
            current.prev = prev;
        } else {
            current.prev = null;
        }
        current.data = list.shift();
        current.next = list.length > 0 ? {} : null;
        [current, prev] = [current.next, current];
    }
    return head;
};
