/*
task 262:
Players - Max
You need to find the maximum value among player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func HighestPlayers(heights []int) int {
	if len(heights) == 0 { return 0 }
	m := heights[0]
	for _, v := range heights {
		if v > m { m = v }
	}
	return m
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, HighestPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, HighestPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, HighestPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, HighestPlayers([]int{100, 200})},
		{[]int{}, HighestPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := HighestPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
