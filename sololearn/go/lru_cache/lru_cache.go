package lru

// Data Structure: LRU Cache
// Combines HashMap + Doubly Linked List
// Get/Put: O(1)

type Node struct {
	key, val   int
	prev, next *Node
}

type LRU struct {
	cap  int
	m    map[int]*Node
	h, t *Node
}

func New(capacity int) *LRU {
	h, t := &Node{}, &Node{}
	h.next, t.prev = t, h
	return &LRU{capacity, map[int]*Node{}, h, t}
}

func (l *LRU) Get(k int) int {
	if n, ok := l.m[k]; ok {
		l.remove(n)
		l.insert(n)
		return n.val
	}
	return -1
}

func (l *LRU) Put(k, v int) {
	if n, ok := l.m[k]; ok {
		n.val = v
		l.remove(n)
		l.insert(n)
		return
	}
	if len(l.m) == l.cap {
		evict := l.t.prev
		l.remove(evict)
		delete(l.m, evict.key)
	}
	n := &Node{key: k, val: v}
	l.m[k] = n
	l.insert(n)
}

func (l *LRU) remove(n *Node) {
	n.prev.next = n.next
	n.next.prev = n.prev
}

func (l *LRU) insert(n *Node) {
	n.next = l.h.next
	n.prev = l.h
	l.h.next.prev = n
	l.h.next = n
}
