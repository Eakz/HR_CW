package main

import "fmt"

// Algorithm: Binary Tree Inorder Traversal
// Order: Left → Root → Right
type Node struct {
	Val   int
	Left  *Node
	Right *Node
}

func inorder(n *Node) {
	if n == nil {
		return
	}
	inorder(n.Left)
	fmt.Print(n.Val, " ")
	inorder(n.Right)
}

func main() {
	root := &Node{2, &Node{1, nil, nil}, &Node{3, nil, nil}}
	inorder(root) // Output: 1 2 3
}
