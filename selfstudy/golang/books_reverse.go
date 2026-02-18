/*
task 258:
Books - Reverse
You need to reverse the order of book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderBooks(pages []int) []int {
	res := make([]int, len(pages))
	for i, v := range pages {
		res[len(pages)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderBooks([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderBooks([]int{100, 200})},
		{[]int{}, Reverse_orderBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
