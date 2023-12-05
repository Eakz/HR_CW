package main

import "fmt"

// Data Structure: Queue (FIFO)
// Implemented using slice
func main() {
	queue := []int{1, 2, 3}
	queue = queue[1:]  // dequeue
	fmt.Println(queue) // Output: [2 3]
}
