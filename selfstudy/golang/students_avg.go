/*
task 214:
Students - Avg
You need to compute the average of student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageStudents(scores []int) float64 {
	if len(scores) == 0 { return 0 }
	sum := 0
	for _, v := range scores {
		sum += v
	}
	return float64(sum)/float64(len(scores))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageStudents([]int{1, 2, 3})},
		{[]int{100, 200}, AverageStudents([]int{100, 200})},
		{[]int{}, AverageStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
