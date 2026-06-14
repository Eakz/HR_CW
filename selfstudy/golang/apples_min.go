/*
task 203:
Apples - Min
You need to find the minimum value among apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestApples(apples []int) int {
	if len(apples) == 0 { return 0 }
	m := apples[0]
	for _, v := range apples {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestApples([]int{1, 2, 3})},
		{[]int{100, 200}, LowestApples([]int{100, 200})},
		{[]int{}, LowestApples([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
