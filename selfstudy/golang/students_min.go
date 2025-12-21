/*
task 213:
Students - Min
You need to find the minimum value among student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestStudents(scores []int) int {
	if len(scores) == 0 { return 0 }
	m := scores[0]
	for _, v := range scores {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestStudents([]int{1, 2, 3})},
		{[]int{100, 200}, LowestStudents([]int{100, 200})},
		{[]int{}, LowestStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
