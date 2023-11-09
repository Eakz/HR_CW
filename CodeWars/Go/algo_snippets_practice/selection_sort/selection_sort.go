package main

import "fmt"

// Algorithm: Selection Sort
// Time: O(n²), Space: O(1)
// Idea: Select smallest element and place it at correct position
func selectionSort(arr []int) {
	for i := 0; i < len(arr); i++ {
		min := i
		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[min] {
				min = j
			}
		}
		arr[i], arr[min] = arr[min], arr[i]
	}
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	selectionSort(arr)
	fmt.Println(arr)
}
