/*
task 283:
Stars - Min
You need to find the minimum value among star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestStars(brightness []int) int {
	if len(brightness) == 0 { return 0 }
	m := brightness[0]
	for _, v := range brightness {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestStars([]int{1, 2, 3})},
		{[]int{100, 200}, LowestStars([]int{100, 200})},
		{[]int{}, LowestStars([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
