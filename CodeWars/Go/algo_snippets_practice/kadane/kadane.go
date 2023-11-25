package main

import "fmt"

// Algorithm: Kadane's Algorithm
// Time: O(n), Space: O(1)
// Finds maximum subarray sum
func maxSubArray(nums []int) int {
	maxSoFar, curr := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		if curr < 0 {
			curr = nums[i]
		} else {
			curr += nums[i]
		}
		if curr > maxSoFar {
			maxSoFar = curr
		}
	}
	return maxSoFar
}

func main() {
	fmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))
}
