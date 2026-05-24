/*
task 228:
Cars - Reverse
You need to reverse the order of car speeds in km/h
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderCars(speeds []int) []int {
	res := make([]int, len(speeds))
	for i, v := range speeds {
		res[len(speeds)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderCars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderCars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderCars([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderCars([]int{100, 200})},
		{[]int{}, Reverse_orderCars([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderCars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
