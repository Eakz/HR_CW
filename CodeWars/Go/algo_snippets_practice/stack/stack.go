package main

import "fmt"

// Data Structure: Stack (LIFO)
// Implemented using slice
func main() {
	stack := []int{}
	stack = append(stack, 1, 2, 3)
	stack = stack[:len(stack)-1] // pop
	fmt.Println(stack)           // Output: [1 2]
}
