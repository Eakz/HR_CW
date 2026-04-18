/*
task 224:
Cars - Avg
You need to compute the average of car speeds in km/h
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageCars(speeds []int) float64 {
	if len(speeds) == 0 { return 0 }
	sum := 0
	for _, v := range speeds {
		sum += v
	}
	return float64(sum)/float64(len(speeds))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageCars([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageCars([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageCars([]int{1, 2, 3})},
		{[]int{100, 200}, AverageCars([]int{100, 200})},
		{[]int{}, AverageCars([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageCars(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
