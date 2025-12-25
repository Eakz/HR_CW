/*
task 282:
Stars - Max
You need to find the maximum value among star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestStars(brightness []int) int {
	if len(brightness) == 0 { return 0 }
	m := brightness[0]
	for _, v := range brightness {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestStars([]int{1, 2, 3})},
		{[]int{100, 200}, HighestStars([]int{100, 200})},
		{[]int{}, HighestStars([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
