/*
task 216:
Students - FilterLow
You need to return only the values less than 50 from student test scores
*/

package main

import (
	"fmt"
	"reflect"
)

func Below_fiftyStudents(scores []int) []int {
	var res []int
	for _, v := range scores {
		if v < 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Below_fiftyStudents([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Below_fiftyStudents([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Below_fiftyStudents([]int{1, 2, 3})},
		{[]int{100, 200}, Below_fiftyStudents([]int{100, 200})},
		{[]int{}, Below_fiftyStudents([]int{})},
	}
	
	for idx, t := range tests {
		res := Below_fiftyStudents(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
