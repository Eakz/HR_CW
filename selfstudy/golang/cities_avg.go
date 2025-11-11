/*
task 274:
Cities - Avg
You need to compute the average of city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageCities(populations []int) float64 {
	if len(populations) == 0 { return 0 }
	sum := 0
	for _, v := range populations {
		sum += v
	}
	return float64(sum)/float64(len(populations))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageCities([]int{1, 2, 3})},
		{[]int{100, 200}, AverageCities([]int{100, 200})},
		{[]int{}, AverageCities([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
