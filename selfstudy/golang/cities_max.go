/*
task 272:
Cities - Max
You need to find the maximum value among city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestCities(populations []int) int {
	if len(populations) == 0 { return 0 }
	m := populations[0]
	for _, v := range populations {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestCities([]int{1, 2, 3})},
		{[]int{100, 200}, HighestCities([]int{100, 200})},
		{[]int{}, HighestCities([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
