package main

import "fmt"

// Algorithm: Hash Map Counting
// Time: O(n), Space: O(n)
func main() {
	arr := []int{1, 2, 2, 3, 3, 3}
	freq := map[int]int{}
	for _, v := range arr {
		freq[v]++
	}
	fmt.Println(freq)
}
