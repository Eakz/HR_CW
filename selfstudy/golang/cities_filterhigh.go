/*
task 275:
Cities - FilterHigh
You need to return only the values greater than 50 from city populations in thousands
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyCities(populations []int) []int {
	var res []int
	for _, v := range populations {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyCities([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyCities([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyCities([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyCities([]int{100, 200})},
		{[]int{}, Above_fiftyCities([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyCities(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
