# https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
def insertNodeAtPosition(head, data, position):
    new_node = SinglyLinkedListNode(data)
    if position == 0:
        new_node.next = head
        return new_node
    temp = head
    while position > 1:
        temp = temp.next
        position -= 1
    new_node.next = temp.next
    temp.next = new_node
    return head