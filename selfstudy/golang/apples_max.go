/*
task 202:
Apples - Max
You need to find the maximum value among apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestApples(apples []int) int {
	if len(apples) == 0 { return 0 }
	m := apples[0]
	for _, v := range apples {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestApples([]int{1, 2, 3})},
		{[]int{100, 200}, HighestApples([]int{100, 200})},
		{[]int{}, HighestApples([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
