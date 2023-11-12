package main

import "fmt"

// Algorithm: Two Pointers
// Time: O(n), Space: O(n)
// Note: rune slice handles Unicode safely
func reverse(s string) string {
	r := []rune(s)
	for l, rgt := 0, len(r)-1; l < rgt; l, rgt = l+1, rgt-1 {
		r[l], r[rgt] = r[rgt], r[l]
	}
	return string(r)
}

func main() {
	fmt.Println(reverse("golang")) // Output: gnalog
}
