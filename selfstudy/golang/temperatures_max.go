/*
task 242:
Temperatures - Max
You need to find the maximum value among daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestTemperatures(temps []int) int {
	if len(temps) == 0 { return 0 }
	m := temps[0]
	for _, v := range temps {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, HighestTemperatures([]int{100, 200})},
		{[]int{}, HighestTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
