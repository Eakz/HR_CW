/*
task 248:
Temperatures - Reverse
You need to reverse the order of daily temperatures in Celsius
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderTemperatures(temps []int) []int {
	res := make([]int, len(temps))
	for i, v := range temps {
		res[len(temps)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderTemperatures([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderTemperatures([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderTemperatures([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderTemperatures([]int{100, 200})},
		{[]int{}, Reverse_orderTemperatures([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderTemperatures(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
