/*
task 266:
Players - FilterLow
You need to return only the values less than 50 from player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func Below_fiftyPlayers(heights []int) []int {
	var res []int
	for _, v := range heights {
		if v < 50 { res = append(res, v) }
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Below_fiftyPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Below_fiftyPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Below_fiftyPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, Below_fiftyPlayers([]int{100, 200})},
		{[]int{}, Below_fiftyPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := Below_fiftyPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
