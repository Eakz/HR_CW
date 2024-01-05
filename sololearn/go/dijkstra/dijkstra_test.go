package graph

import "testing"

func TestDijkstra(t *testing.T) {
	g := map[int][]Edge{
		0: {{1, 4}, {2, 1}},
		2: {{1, 2}},
	}
	if Dijkstra(g, 0)[1] != 3 {
		t.Fatal("wrong shortest path")
	}
}

func BenchmarkDijkstra(b *testing.B) {
	g := map[int][]Edge{0: {{1, 1}, {2, 2}}}
	for i := 0; i < b.N; i++ {
		Dijkstra(g, 0)
	}
}
