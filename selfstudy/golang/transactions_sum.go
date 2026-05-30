/*
task 231:
Transactions - Sum
You need to calculate the total sum of transaction amounts in dollars
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalTransactions(amounts []int) int {
	sum := 0
	for _, v := range amounts {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalTransactions([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalTransactions([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalTransactions([]int{1, 2, 3})},
		{[]int{100, 200}, TotalTransactions([]int{100, 200})},
		{[]int{}, TotalTransactions([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalTransactions(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
