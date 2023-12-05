package main

import "fmt"

// Algorithm: Euclidean Algorithm
// Time: O(log n)
func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func main() {
	fmt.Println(gcd(48, 18)) // Output: 6
}
