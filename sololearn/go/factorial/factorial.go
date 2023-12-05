package main

import "fmt"

// Algorithm: Recursion
// Time: O(n), Space: O(n) call stack
func factorial(n int) int {
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	fmt.Println(factorial(5)) // Output: 120
}
