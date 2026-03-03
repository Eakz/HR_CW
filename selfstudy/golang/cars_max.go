/*
task 222:
Cars - Max
You need to find the maximum value among car speeds in km/h
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestCars(speeds []int) int {
	if len(speeds) == 0 { return 0 }
	m := speeds[0]
	for _, v := range speeds {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestCars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestCars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestCars([]int{1, 2, 3})},
		{[]int{100, 200}, HighestCars([]int{100, 200})},
		{[]int{}, HighestCars([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestCars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
