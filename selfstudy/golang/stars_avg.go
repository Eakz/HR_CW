/*
task 284:
Stars - Avg
You need to compute the average of star luminosities
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageStars(brightness []int) float64 {
	if len(brightness) == 0 { return 0 }
	sum := 0
	for _, v := range brightness {
		sum += v
	}
	return float64(sum)/float64(len(brightness))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageStars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageStars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageStars([]int{1, 2, 3})},
		{[]int{100, 200}, AverageStars([]int{100, 200})},
		{[]int{}, AverageStars([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageStars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
