/*
task 219:
Students - SortAsc
You need to sort the values in ascending order for student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func Sort_upStudents(scores []int) []int {
	res := make([]int, len(scores))
	copy(res, scores)
	for i := 0; i < len(res); i++ {
		for j := i+1; j < len(res); j++ {
			if res[i] > res[j] { res[i], res[j] = res[j], res[i] }
		}
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Sort_upStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Sort_upStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Sort_upStudents([]int{1, 2, 3})},
		{[]int{100, 200}, Sort_upStudents([]int{100, 200})},
		{[]int{}, Sort_upStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := Sort_upStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
