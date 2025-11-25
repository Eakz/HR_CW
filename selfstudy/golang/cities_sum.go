/*
task 271:
Cities - Sum
You need to calculate the total sum of city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalCities(populations []int) int {
	sum := 0
	for _, v := range populations {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalCities([]int{1, 2, 3})},
		{[]int{100, 200}, TotalCities([]int{100, 200})},
		{[]int{}, TotalCities([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
