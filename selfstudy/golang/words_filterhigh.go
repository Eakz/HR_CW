/*
task 295:
Words - FilterHigh
You need to return only the values greater than 50 from word lengths
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyWords(lengths []int) []int {
	var res []int
	for _, v := range lengths {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyWords([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyWords([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyWords([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyWords([]int{100, 200})},
		{[]int{}, Above_fiftyWords([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyWords(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
