package main

import "fmt"

// Algorithm: Bubble Sort
// Time: O(n²), Space: O(1)
// Idea: Repeatedly swap adjacent elements if out of order
func bubbleSort(arr []int) {
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func main() {
	arr := []int{5, 1, 4, 2, 8}
	bubbleSort(arr)
	fmt.Println(arr) // Output: [1 2 4 5 8]
}
