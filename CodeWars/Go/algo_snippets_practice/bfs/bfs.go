package main

import "fmt"

// Algorithm: Breadth-First Search
// Time: O(V+E), Space: O(V)
// Uses queue for level-order traversal
func bfs(graph map[int][]int, start int) {
	visited := map[int]bool{}
	queue := []int{start}

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]

		if visited[node] {
			continue
		}
		visited[node] = true
		fmt.Print(node, " ")

		for _, n := range graph[node] {
			queue = append(queue, n)
		}
	}
}

func main() {
	graph := map[int][]int{1: {2, 3}, 2: {4}}
	bfs(graph, 1) // Output: 1 2 3 4
}
