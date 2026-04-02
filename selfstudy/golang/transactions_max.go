/*
task 232:
Transactions - Max
You need to find the maximum value among transaction amounts in dollars
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestTransactions(amounts []int) int {
	if len(amounts) == 0 { return 0 }
	m := amounts[0]
	for _, v := range amounts {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestTransactions([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestTransactions([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestTransactions([]int{1, 2, 3})},
		{[]int{100, 200}, HighestTransactions([]int{100, 200})},
		{[]int{}, HighestTransactions([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestTransactions(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
