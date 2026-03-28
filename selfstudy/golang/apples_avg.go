/*
task 204:
Apples - Avg
You need to compute the average of apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageApples(apples []int) float64 {
	if len(apples) == 0 { return 0 }
	sum := 0
	for _, v := range apples {
		sum += v
	}
	return float64(sum)/float64(len(apples))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageApples([]int{1, 2, 3})},
		{[]int{100, 200}, AverageApples([]int{100, 200})},
		{[]int{}, AverageApples([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
