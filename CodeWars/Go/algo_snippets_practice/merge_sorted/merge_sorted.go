package main

import "fmt"

// Algorithm: Two Pointers
// Time: O(n+m), Space: O(n+m)
func merge(a, b []int) []int {
	res := []int{}
	i, j := 0, 0
	for i < len(a) && j < len(b) {
		if a[i] < b[j] {
			res = append(res, a[i])
			i++
		} else {
			res = append(res, b[j])
			j++
		}
	}
	return append(res, a[i:]..., b[j:]...)
}

func main() {
	fmt.Println(merge([]int{1,3,5}, []int{2,4,6}))
}
