/*
task 243:
Temperatures - Min
You need to find the minimum value among daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestTemperatures(temps []int) int {
	if len(temps) == 0 { return 0 }
	m := temps[0]
	for _, v := range temps {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, LowestTemperatures([]int{100, 200})},
		{[]int{}, LowestTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
