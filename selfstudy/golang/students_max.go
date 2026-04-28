/*
task 212:
Students - Max
You need to find the maximum value among student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestStudents(scores []int) int {
	if len(scores) == 0 { return 0 }
	m := scores[0]
	for _, v := range scores {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestStudents([]int{1, 2, 3})},
		{[]int{100, 200}, HighestStudents([]int{100, 200})},
		{[]int{}, HighestStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
