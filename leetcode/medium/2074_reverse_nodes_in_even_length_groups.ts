/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
[5, 2, 6, 3, 9, 1, 7, 3, 8, 4];
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const preset1 = new ListNode(
    5,
    new ListNode(
        2,
        new ListNode(
            6,
            new ListNode(
                3,
                new ListNode(
                    9,
                    new ListNode(
                        1,
                        new ListNode(
                            7,
                            new ListNode(3, new ListNode(8, new ListNode(4, null))),
                        ),
                    ),
                ),
            ),
        ),
    ),
);

const preset2 = new ListNode(
    1,
    new ListNode(1, new ListNode(0, new ListNode(6, new ListNode(5, null)))),
);

const preset3 = new ListNode(
    1,
    new ListNode(1, new ListNode(0, new ListNode(6, new ListNode(5, null)))),
);
const preset4 = new ListNode(
    4,
    new ListNode(
        3,
        new ListNode(
            0,
            new ListNode(
                5,
                new ListNode(
                    1,
                    new ListNode(
                        2,
                        new ListNode(7, new ListNode(8, new ListNode(6, null))),
                    ),
                ),
            ),
        ),
    ),
);

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
    // Scan nodeList to array
    let arrayedList: number[] = [];
    let currentNode = head;
    while (currentNode) {
        if ('val' in currentNode) {
            arrayedList.push(currentNode.val);
        }
        currentNode = currentNode.next;
    }
    // Reversing even steps
    let step = 1;
    let currentLengthMax = step;
    let stepList: number[] = [];
    const finalArray: number[] = [];
    for (let i = 0; i < arrayedList.length; i++) {
        stepList.push(arrayedList[i]);
        // Check if this group is last
        const isLast = i === arrayedList.length - 1;
        // Check for current step portion or last element of the array
        if (i + 1 === currentLengthMax || isLast) {
            // Preserve or reverse stepped batch
            if (step % 2 === 0 && !isLast || (isLast && stepList.length % 2 === 0)) {
                console.log({len:stepList.length})
                stepList = stepList.reverse();
            }
            // Push batch into finalArray
            finalArray.push(...stepList);
            // Clear steplist
            stepList = [];
            // Adjust next step
            step++;
            currentLengthMax += step;
        }
    }
    // Apply modified array to existent linked List
    let headPoint = head;
    finalArray.forEach(value => {
        if (headPoint !== null) {
            headPoint.val = value;
            headPoint = headPoint?.next;
        }
    });

    return head;
}

reverseEvenLengthGroups(preset1);
reverseEvenLengthGroups(preset2);
reverseEvenLengthGroups(preset3);
reverseEvenLengthGroups(preset4);
