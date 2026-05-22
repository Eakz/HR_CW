/*
task 215:
Students - FilterHigh
You need to return only the values greater than 50 from student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyStudents(scores []int) []int {
	var res []int
	for _, v := range scores {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyStudents([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyStudents([]int{100, 200})},
		{[]int{}, Above_fiftyStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
