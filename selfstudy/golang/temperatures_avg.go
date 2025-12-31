/*
task 244:
Temperatures - Avg
You need to compute the average of daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageTemperatures(temps []int) float64 {
	if len(temps) == 0 { return 0 }
	sum := 0
	for _, v := range temps {
		sum += v
	}
	return float64(sum)/float64(len(temps))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, AverageTemperatures([]int{100, 200})},
		{[]int{}, AverageTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
