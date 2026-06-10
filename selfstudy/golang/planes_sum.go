/*
Task: Planes - Sum
Calculate the total sum of plane speeds.
*/

package main

import "fmt"

func SumPlanes(planes []int) int {
	sum := 0
	for _, v := range planes {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, 60},
		{[]int{5, 5, 5}, 15},
		{[]int{1, 2}, 3},
		{[]int{100}, 100},
		{[]int{}, 0},
	}
	
	for idx, t := range tests {
		res := SumPlanes(t.input)
		status := "FAIL"
		if res == t.expected {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}
