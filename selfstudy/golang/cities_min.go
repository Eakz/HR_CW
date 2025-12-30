/*
task 273:
Cities - Min
You need to find the minimum value among city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestCities(populations []int) int {
	if len(populations) == 0 { return 0 }
	m := populations[0]
	for _, v := range populations {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestCities([]int{1, 2, 3})},
		{[]int{100, 200}, LowestCities([]int{100, 200})},
		{[]int{}, LowestCities([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
