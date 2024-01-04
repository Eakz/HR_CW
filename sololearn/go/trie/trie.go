package trie

// Data Structure: Trie (Prefix Tree)
// Use cases: autocomplete, prefix search
// Insert/Search: O(L)

type Node struct {
	next map[rune]*Node
	end  bool
}

type Trie struct {
	root *Node
}

func New() *Trie {
	return &Trie{&Node{next: map[rune]*Node{}}}
}

func (t *Trie) Insert(w string) {
	n := t.root
	for _, c := range w {
		if n.next[c] == nil {
			n.next[c] = &Node{next: map[rune]*Node{}}
		}
		n = n.next[c]
	}
	n.end = true
}

func (t *Trie) Search(w string) bool {
	n := t.root
	for _, c := range w {
		if n.next[c] == nil {
			return false
		}
		n = n.next[c]
	}
	return n.end
}
