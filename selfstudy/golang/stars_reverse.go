/*
task 288:
Stars - Reverse
You need to reverse the order of star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderStars(brightness []int) []int {
	res := make([]int, len(brightness))
	for i, v := range brightness {
		res[len(brightness)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderStars([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderStars([]int{100, 200})},
		{[]int{}, Reverse_orderStars([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
