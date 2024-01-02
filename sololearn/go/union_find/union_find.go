package dsu

// Algorithm: Union-Find (DSU)
// Optimizations:
//  - Path compression
//  - Union by rank
// Time: ~O(1) amortized

type DSU struct {
	parent, rank []int
}

func New(n int) *DSU {
	p := make([]int, n)
	r := make([]int, n)
	for i := range p {
		p[i] = i
	}
	return &DSU{p, r}
}

func (d *DSU) Find(x int) int {
	if d.parent[x] != x {
		d.parent[x] = d.Find(d.parent[x])
	}
	return d.parent[x]
}

func (d *DSU) Union(a, b int) {
	pa, pb := d.Find(a), d.Find(b)
	if pa == pb {
		return
	}
	if d.rank[pa] < d.rank[pb] {
		d.parent[pa] = pb
	} else {
		d.parent[pb] = pa
		if d.rank[pa] == d.rank[pb] {
			d.rank[pa]++
		}
	}
}
