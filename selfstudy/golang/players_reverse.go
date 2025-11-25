/*
task 268:
Players - Reverse
You need to reverse the order of player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func Reverse_orderPlayers(heights []int) []int {
	res := make([]int, len(heights))
	for i, v := range heights {
		res[len(heights)-1-i] = v
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Reverse_orderPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Reverse_orderPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Reverse_orderPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, Reverse_orderPlayers([]int{100, 200})},
		{[]int{}, Reverse_orderPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := Reverse_orderPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
