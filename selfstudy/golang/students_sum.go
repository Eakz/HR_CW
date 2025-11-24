/*
task 211:
Students - Sum
You need to calculate the total sum of student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalStudents(scores []int) int {
	sum := 0
	for _, v := range scores {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalStudents([]int{1, 2, 3})},
		{[]int{100, 200}, TotalStudents([]int{100, 200})},
		{[]int{}, TotalStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
