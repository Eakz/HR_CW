package main

import "fmt"

// Algorithm: Depth-First Search
// Time: O(V+E), Space: O(V)
// Uses recursion
func dfs(node int, graph map[int][]int, visited map[int]bool) {
	if visited[node] {
		return
	}
	visited[node] = true
	fmt.Print(node, " ")
	for _, n := range graph[node] {
		dfs(n, graph, visited)
	}
}

func main() {
	graph := map[int][]int{1: {2, 3}, 2: {4}}
	dfs(1, graph, map[int]bool{}) // Output: 1 2 4 3
}
