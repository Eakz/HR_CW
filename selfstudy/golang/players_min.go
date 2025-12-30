/*
task 263:
Players - Min
You need to find the minimum value among player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func LowestPlayers(heights []int) int {
	if len(heights) == 0 { return 0 }
	m := heights[0]
	for _, v := range heights {
		if v < m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, LowestPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, LowestPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, LowestPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, LowestPlayers([]int{100, 200})},
		{[]int{}, LowestPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := LowestPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
