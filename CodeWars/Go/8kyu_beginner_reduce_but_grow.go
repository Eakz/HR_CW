package main

import "fmt"

func Grow(arr []int) int {
	var result = 1
	for _, v := range arr {
		result *= v
	}
	return result
}

func main() {
	fmt.Println(Grow([]int{1, 2, 3}), 6)
	fmt.Println(Grow([]int{4, 1, 1, 1, 4}), 16)
	fmt.Println(Grow([]int{2, 2, 2, 2, 2, 2}), 64)
}
