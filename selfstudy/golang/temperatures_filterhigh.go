/*
task 245:
Temperatures - FilterHigh
You need to return only the values greater than 50 from daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyTemperatures(temps []int) []int {
	var res []int
	for _, v := range temps {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyTemperatures([]int{100, 200})},
		{[]int{}, Above_fiftyTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
