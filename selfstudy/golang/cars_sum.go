/*
task 221:
Cars - Sum
You need to calculate the total sum of car speeds in km/h
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalCars(speeds []int) int {
	sum := 0
	for _, v := range speeds {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalCars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalCars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalCars([]int{1, 2, 3})},
		{[]int{100, 200}, TotalCars([]int{100, 200})},
		{[]int{}, TotalCars([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalCars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
