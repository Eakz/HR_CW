package main

import "fmt"

// Algorithm: Two Pointers
// Time: O(n), Space: O(n)
// Idea: Compare mirrored characters
func isPalindrome(s string) bool {
	r := []rune(s)
	l, rgt := 0, len(r)-1
	for l < rgt {
		if r[l] != r[rgt] {
			return false
		}
		l++
		rgt--
	}
	return true
}

func main() {
	fmt.Println(isPalindrome("level")) // Output: true
}
