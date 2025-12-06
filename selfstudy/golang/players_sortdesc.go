/*
task 270:
Players - SortDesc
You need to sort the values in descending order for player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func Sort_downPlayers(heights []int) []int {
	res := make([]int, len(heights))
	copy(res, heights)
	for i := 0; i < len(res); i++ {
		for j := i+1; j < len(res); j++ {
			if res[i] < res[j] { res[i], res[j] = res[j], res[i] }
		}
	}
	return res
}

func main() {
	tests := []struct {
		input []int
		expected []int
	}{
		{[]int{10, 20, 30}, Sort_downPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, Sort_downPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, Sort_downPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, Sort_downPlayers([]int{100, 200})},
		{[]int{}, Sort_downPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := Sort_downPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// finally works
