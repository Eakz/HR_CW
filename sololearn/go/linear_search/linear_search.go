package main

import "fmt"

// Algorithm: Linear Search (Brute Force)
// Time: O(n), Space: O(1)
// Idea: Scan each element until target is found

func linearSearch(arr []int, target int) int {
	for i, v := range arr {
		if v == target {
			return i
		}
	}
	return -1
}

func main() {
	arr := []int{4, 2, 7, 1, 9}
	fmt.Println(linearSearch(arr, 7)) // Output: 2
}
