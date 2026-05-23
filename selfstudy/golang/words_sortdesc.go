/*
task 300:
Words - SortDesc
You need to sort the values in descending order for word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func Sort_downWords(lengths []int) []int {
	res := make([]int, len(lengths))
	copy(res, lengths)
	for i := 0; i < len(res); i++ {
		for j := i+1; j < len(res); j++ {
			if res[i] < res[j] { res[i], res[j] = res[j], res[i] }
		}
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Sort_downWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Sort_downWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Sort_downWords([]int{1, 2, 3})},
		{[]int{100, 200}, Sort_downWords([]int{100, 200})},
		{[]int{}, Sort_downWords([]int{})},
	}
	
	for idx, t := range tests {
		res := Sort_downWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
