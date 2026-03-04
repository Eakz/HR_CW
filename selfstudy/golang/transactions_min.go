/*
task 233:
Transactions - Min
You need to find the minimum value among transaction amounts in dollars
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestTransactions(amounts []int) int {
	if len(amounts) == 0 { return 0 }
	m := amounts[0]
	for _, v := range amounts {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestTransactions([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestTransactions([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestTransactions([]int{1, 2, 3})},
		{[]int{100, 200}, LowestTransactions([]int{100, 200})},
		{[]int{}, LowestTransactions([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestTransactions(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
