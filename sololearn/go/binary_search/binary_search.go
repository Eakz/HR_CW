package main

import "fmt"

// Algorithm: Binary Search (Divide & Conquer)
// Time: O(log n), Space: O(1)
// Requirement: Input must be sorted
func binarySearch(arr []int, target int) int {
	l, r := 0, len(arr)-1
	for l <= r {
		m := (l + r) / 2
		if arr[m] == target {
			return m
		}
		if arr[m] < target {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return -1
}

func main() {
	fmt.Println(binarySearch([]int{1, 3, 5, 7, 9}, 7)) // Output: 3
}
