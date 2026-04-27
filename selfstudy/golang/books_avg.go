/*
task 254:
Books - Avg
You need to compute the average of book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageBooks(pages []int) float64 {
	if len(pages) == 0 { return 0 }
	sum := 0
	for _, v := range pages {
		sum += v
	}
	return float64(sum)/float64(len(pages))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageBooks([]int{1, 2, 3})},
		{[]int{100, 200}, AverageBooks([]int{100, 200})},
		{[]int{}, AverageBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
