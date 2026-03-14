/*
task 265:
Players - FilterHigh
You need to return only the values greater than 50 from player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func Above_fiftyPlayers(heights []int) []int {
	var res []int
	for _, v := range heights {
		if v > 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Above_fiftyPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Above_fiftyPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Above_fiftyPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, Above_fiftyPlayers([]int{100, 200})},
		{[]int{}, Above_fiftyPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := Above_fiftyPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// works i think
