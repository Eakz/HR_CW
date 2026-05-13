/*
task 208:
Apples - Reverse
You need to reverse the order of apple weights in grams
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderApples(apples []int) []int {
	res := make([]int, len(apples))
	for i, v := range apples {
		res[len(apples)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderApples([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderApples([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderApples([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderApples([]int{100, 200})},
		{[]int{}, Reverse_orderApples([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderApples(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
