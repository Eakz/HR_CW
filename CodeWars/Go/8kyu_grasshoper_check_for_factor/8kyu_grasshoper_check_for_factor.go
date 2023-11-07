package main

import (
	"fmt"
)

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/go

func CheckForFactor(base int, factor int) bool {
	return base%factor == 0
}

func main() {

	fmt.Println(CheckForFactor(10, 2), true)
	fmt.Println(CheckForFactor(63, 7), true)
	fmt.Println(CheckForFactor(2450, 5), true)
	fmt.Println(CheckForFactor(24612, 3), true)
	fmt.Println(CheckForFactor(9, 2), false)
	fmt.Println(CheckForFactor(653, 7), false)
	fmt.Println(CheckForFactor(2453, 5), false)
	fmt.Println(CheckForFactor(24617, 3), false)
}
