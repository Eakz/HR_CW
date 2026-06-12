/*
task 261:
Players - Sum
You need to calculate the total sum of player heights in cm
*/

package main

import (
	"fmt"
	"reflect"
)

func TotalPlayers(heights []int) int {
	sum := 0
	for _, v := range heights {
		sum += v
	}
	return sum
}

func main() {
	tests := []struct {
		input []int
		expected int
	}{
		{[]int{10, 20, 30}, TotalPlayers([]int{10, 20, 30})},
		{[]int{50, 60, 70}, TotalPlayers([]int{50, 60, 70})},
		{[]int{1, 2, 3}, TotalPlayers([]int{1, 2, 3})},
		{[]int{100, 200}, TotalPlayers([]int{100, 200})},
		{[]int{}, TotalPlayers([]int{})},
	}
	
	for idx, t := range tests {
		res := TotalPlayers(t.input)
		status := "FAIL"
		if reflect.DeepEqual(res, t.expected) {
			status = "PASS"
		}
		fmt.Printf("Test %d: %s\n", idx+1, status)
	}
}

// done
