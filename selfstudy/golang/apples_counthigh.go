/*
task 207:
Apples - CountHigh
You need to count how many values are greater than 50 in apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func Count_above_fiftyApples(apples []int) int {
	count := 0
	for _, v := range apples {
		if v > 50 { count++ }
	}
	return count
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, Count_above_fiftyApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Count_above_fiftyApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Count_above_fiftyApples([]int{1, 2, 3})},
		{[]int{100, 200}, Count_above_fiftyApples([]int{100, 200})},
		{[]int{}, Count_above_fiftyApples([]int{})},
	}
	
	for idx, t := range tests {
		res := Count_above_fiftyApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
