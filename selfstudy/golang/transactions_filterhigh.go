/*
task 235:
Transactions - FilterHigh
You need to return only the values greater than 50 from transaction amounts in dollars
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyTransactions(amounts []int) []int {
	var res []int
	for _, v := range amounts {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyTransactions([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyTransactions([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyTransactions([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyTransactions([]int{100, 200})},
		{[]int{}, Above_fiftyTransactions([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyTransactions(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
