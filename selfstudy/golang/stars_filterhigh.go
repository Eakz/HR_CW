/*
task 285:
Stars - FilterHigh
You need to return only the values greater than 50 from star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyStars(brightness []int) []int {
	var res []int
	for _, v := range brightness {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyStars([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyStars([]int{100, 200})},
		{[]int{}, Above_fiftyStars([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
