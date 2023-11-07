package main

import (
	"fmt"
	"math"
)

func SquareOrSquareRoot(arr []int) []int {
	results := make([]int, len(arr))

	for i, x := range arr {
		sqrt := math.Sqrt(float64(x))

		if sqrt == math.Floor(sqrt) {
			results[i] = int(sqrt)
		} else {
			results[i] = x * x
		}
	}

	return results
}

func main() {
	fmt.Println(SquareOrSquareRoot([]int{4, 3, 9, 7, 2, 1}), [6]int{2, 9, 3, 49, 4, 1})
	fmt.Println(SquareOrSquareRoot([]int{7744, 2304, 3600, 6724}), [4]int{88, 48, 60, 82})
}
