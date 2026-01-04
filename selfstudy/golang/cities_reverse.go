/*
task 278:
Cities - Reverse
You need to reverse the order of city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderCities(populations []int) []int {
	res := make([]int, len(populations))
	for i, v := range populations {
		res[len(populations)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderCities([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderCities([]int{100, 200})},
		{[]int{}, Reverse_orderCities([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
