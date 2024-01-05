package graph

// Algorithm: Dijkstra
// Time: O((V+E) log V)
// Uses priority queue

import "container/heap"

type Edge struct {
	to, weight int
}

type Item struct {
	node, dist int
}

type PQ []Item

func (p PQ) Len() int           { return len(p) }
func (p PQ) Less(i, j int) bool { return p[i].dist < p[j].dist }
func (p PQ) Swap(i, j int)      { p[i], p[j] = p[j], p[i] }
func (p *PQ) Push(x any)        { *p = append(*p, x.(Item)) }
func (p *PQ) Pop() any {
	old := *p
	x := old[len(old)-1]
	*p = old[:len(old)-1]
	return x
}

func Dijkstra(g map[int][]Edge, s int) map[int]int {
	dist := map[int]int{s: 0}
	pq := &PQ{{s, 0}}
	heap.Init(pq)

	for pq.Len() > 0 {
		cur := heap.Pop(pq).(Item)
		for _, e := range g[cur.node] {
			d := cur.dist + e.weight
			if v, ok := dist[e.to]; !ok || d < v {
				dist[e.to] = d
				heap.Push(pq, Item{e.to, d})
			}
		}
	}
	return dist
}
