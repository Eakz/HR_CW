/*
task 253:
Books - Min
You need to find the minimum value among book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestBooks(pages []int) int {
	if len(pages) == 0 { return 0 }
	m := pages[0]
	for _, v := range pages {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestBooks([]int{1, 2, 3})},
		{[]int{100, 200}, LowestBooks([]int{100, 200})},
		{[]int{}, LowestBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
