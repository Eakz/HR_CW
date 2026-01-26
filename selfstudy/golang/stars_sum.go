/*
task 281:
Stars - Sum
You need to calculate the total sum of star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalStars(brightness []int) int {
	sum := 0
	for _, v := range brightness {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalStars([]int{1, 2, 3})},
		{[]int{100, 200}, TotalStars([]int{100, 200})},
		{[]int{}, TotalStars([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
