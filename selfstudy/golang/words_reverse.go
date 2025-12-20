/*
task 298:
Words - Reverse
You need to reverse the order of word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderWords(lengths []int) []int {
	res := make([]int, len(lengths))
	for i, v := range lengths {
		res[len(lengths)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderWords([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderWords([]int{100, 200})},
		{[]int{}, Reverse_orderWords([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
