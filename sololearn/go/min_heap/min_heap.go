package heap

// Data Structure: Min Heap (Binary Heap)
// Operations:
//  Push: O(log n)
//  Pop:  O(log n)
// Use cases: priority queues, schedulers, Dijkstra

type MinHeap struct {
	data []int
}

func New() *MinHeap { return &MinHeap{} }

func (h *MinHeap) Push(x int) {
	h.data = append(h.data, x)
	h.up(len(h.data) - 1)
}

func (h *MinHeap) Pop() int {
	if len(h.data) == 0 {
		return -1
	}
	root := h.data[0]
	last := h.data[len(h.data)-1]
	h.data = h.data[:len(h.data)-1]
	if len(h.data) > 0 {
		h.data[0] = last
		h.down(0)
	}
	return root
}

func (h *MinHeap) up(i int) {
	for i > 0 {
		p := (i - 1) / 2
		if h.data[p] <= h.data[i] {
			break
		}
		h.data[p], h.data[i] = h.data[i], h.data[p]
		i = p
	}
}

func (h *MinHeap) down(i int) {
	for {
		l, r := 2*i+1, 2*i+2
		s := i
		if l < len(h.data) && h.data[l] < h.data[s] {
			s = l
		}
		if r < len(h.data) && h.data[r] < h.data[s] {
			s = r
		}
		if s == i {
			return
		}
		h.data[i], h.data[s] = h.data[s], h.data[i]
		i = s
	}
}
