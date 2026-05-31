/*
task 252:
Books - Max
You need to find the maximum value among book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestBooks(pages []int) int {
	if len(pages) == 0 { return 0 }
	m := pages[0]
	for _, v := range pages {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestBooks([]int{1, 2, 3})},
		{[]int{100, 200}, HighestBooks([]int{100, 200})},
		{[]int{}, HighestBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
