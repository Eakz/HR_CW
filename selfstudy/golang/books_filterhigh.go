/*
task 255:
Books - FilterHigh
You need to return only the values greater than 50 from book page counts
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyBooks(pages []int) []int {
	var res []int
	for _, v := range pages {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyBooks([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyBooks([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyBooks([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyBooks([]int{100, 200})},
		{[]int{}, Above_fiftyBooks([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyBooks(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
