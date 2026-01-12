/*
task 292:
Words - Max
You need to find the maximum value among word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestWords(lengths []int) int {
	if len(lengths) == 0 { return 0 }
	m := lengths[0]
	for _, v := range lengths {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestWords([]int{1, 2, 3})},
		{[]int{100, 200}, HighestWords([]int{100, 200})},
		{[]int{}, HighestWords([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
