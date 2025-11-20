/*
task 251:
Books - Sum
You need to calculate the total sum of book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalBooks(pages []int) int {
	sum := 0
	for _, v := range pages {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalBooks([]int{1, 2, 3})},
		{[]int{100, 200}, TotalBooks([]int{100, 200})},
		{[]int{}, TotalBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
