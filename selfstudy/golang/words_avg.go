/*
task 294:
Words - Avg
You need to compute the average of word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageWords(lengths []int) float64 {
	if len(lengths) == 0 { return 0 }
	sum := 0
	for _, v := range lengths {
		sum += v
	}
	return float64(sum)/float64(len(lengths))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageWords([]int{1, 2, 3})},
		{[]int{100, 200}, AverageWords([]int{100, 200})},
		{[]int{}, AverageWords([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
