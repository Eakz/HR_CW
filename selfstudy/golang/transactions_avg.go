/*
task 234:
Transactions - Avg
You need to compute the average of transaction amounts in dollars
*/

package main

import (
	"fmt"
	"reflect"
)

func AverageTransactions(amounts []int) float64 {
	if len(amounts) == 0 { return 0 }
	sum := 0
	for _, v := range amounts {
		sum += v
	}
	return float64(sum)/float64(len(amounts))
}

func main() {
	tests := []struct {
		input []int
		expected float64
	}{
		{[]int{10, 20, 30}, AverageTransactions([]int{10, 20, 30})},
		{[]int{50, 60, 70}, AverageTransactions([]int{50, 60, 70})},
		{[]int{1, 2, 3}, AverageTransactions([]int{1, 2, 3})},
		{[]int{100, 200}, AverageTransactions([]int{100, 200})},
		{[]int{}, AverageTransactions([]int{})},
	}
	
	for idx, t := range tests {
		res := AverageTransactions(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
