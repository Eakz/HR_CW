/*
task 218:
Students - Reverse
You need to reverse the order of student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderStudents(scores []int) []int {
	res := make([]int, len(scores))
	for i, v := range scores {
		res[len(scores)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderStudents([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderStudents([]int{100, 200})},
		{[]int{}, Reverse_orderStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
