//  Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let cursor: ListNode | null = null,
        list1 = l1,
        list2 = l2,
        carryOver = false;
    const answer = new ListNode(0, null);
    while (list1 || list2 || carryOver) {
        const val1 = list1?.val || 0;
        const val2 = list2?.val || 0;
        const summedVal: number = val1 + val2 + +carryOver;
        const digit = summedVal % 10;
        carryOver = summedVal > 9;
        if (!cursor) {
            cursor = answer;
        } else {
            Object.assign(cursor, { next: new ListNode(0, null) });
            cursor = cursor.next;
        }
        Object.assign(cursor || {}, { val: digit });
        list1 = list1?.next || null;
        list2 = list2?.next || null;
    }
    return answer;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const printList = (l: ListNode | null) => {
    if (l === null) {
        console.log(null);
        return;
    }
    let list: ListNode | null = l;
    let value = '';
    do {
        value += list.val;
        list = list.next;
    } while (list !== null);
    console.log(parseInt(value, 10));
};

printList(addTwoNumbers(l1, l2));
