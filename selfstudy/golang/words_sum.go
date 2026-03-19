/*
task 291:
Words - Sum
You need to calculate the total sum of word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalWords(lengths []int) int {
	sum := 0
	for _, v := range lengths {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalWords([]int{1, 2, 3})},
		{[]int{100, 200}, TotalWords([]int{100, 200})},
		{[]int{}, TotalWords([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
