package main

import "fmt"

// Algorithm: Dynamic Programming (Bottom-Up)
// Time: O(n), Space: O(n)
// Avoids exponential recursion
func fib(n int) int {
	if n <= 1 {
		return n
	}
	dp := make([]int, n+1)
	dp[1] = 1
	for i := 2; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}
	return dp[n]
}

func main() {
	fmt.Println(fib(10)) // Output: 55
}
