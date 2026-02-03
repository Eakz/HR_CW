/*
task 201:
Apples - Sum
You need to calculate the total sum of apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalApples(apples []int) int {
	sum := 0
	for _, v := range apples {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalApples([]int{1, 2, 3})},
		{[]int{100, 200}, TotalApples([]int{100, 200})},
		{[]int{}, TotalApples([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
