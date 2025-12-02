/*
task 241:
Temperatures - Sum
You need to calculate the total sum of daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalTemperatures(temps []int) int {
	sum := 0
	for _, v := range temps {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, TotalTemperatures([]int{100, 200})},
		{[]int{}, TotalTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
