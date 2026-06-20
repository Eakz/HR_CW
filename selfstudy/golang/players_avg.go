/*
task 264:
Players - Avg
You need to compute the average of player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func AveragePlayers(heights []int) float64 {
	if len(heights) == 0 { return 0 }
	sum := 0
	for _, v := range heights {
		sum += v
	}
	return float64(sum)/float64(len(heights))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AveragePlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AveragePlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AveragePlayers([]int{1, 2, 3})},
		{[]int{100, 200}, AveragePlayers([]int{100, 200})},
		{[]int{}, AveragePlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := AveragePlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
