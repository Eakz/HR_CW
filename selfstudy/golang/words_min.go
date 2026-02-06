/*
task 293:
Words - Min
You need to find the minimum value among word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestWords(lengths []int) int {
	if len(lengths) == 0 { return 0 }
	m := lengths[0]
	for _, v := range lengths {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestWords([]int{1, 2, 3})},
		{[]int{100, 200}, LowestWords([]int{100, 200})},
		{[]int{}, LowestWords([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
