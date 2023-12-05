package main

import "fmt"

// Algorithm: Hash Map Lookup
// Time: O(n), Space: O(n)
// Idea: Store seen values and lookup complement
func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, v := range nums {
		if j, ok := m[target-v]; ok {
			return []int{j, i}
		}
		m[v] = i
	}
	return nil
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // Output: [0 1]
}
