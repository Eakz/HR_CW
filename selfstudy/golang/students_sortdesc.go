/*
task 220:
Students - SortDesc
You need to sort the values in descending order for student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func Sort_downStudents(scores []int) []int {
	res := make([]int, len(scores))
	copy(res, scores)
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
		{[]int{10, 20, 30}, Sort_downStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Sort_downStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Sort_downStudents([]int{1, 2, 3})},
		{[]int{100, 200}, Sort_downStudents([]int{100, 200})},
		{[]int{}, Sort_downStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := Sort_downStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
