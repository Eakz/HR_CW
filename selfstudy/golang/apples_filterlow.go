/*
task 206:
Apples - FilterLow
You need to return only the values less than 50 from apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func Below_fiftyApples(apples []int) []int {
	var res []int
	for _, v := range apples {
		if v < 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Below_fiftyApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Below_fiftyApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Below_fiftyApples([]int{1, 2, 3})},
		{[]int{100, 200}, Below_fiftyApples([]int{100, 200})},
		{[]int{}, Below_fiftyApples([]int{})},
	}
	
	for idx, t := range tests {
		res := Below_fiftyApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
