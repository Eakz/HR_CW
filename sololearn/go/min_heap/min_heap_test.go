package heap

import "testing"

func TestMinHeap(t *testing.T) {
	h := New()
	h.Push(3)
	h.Push(1)
	h.Push(2)
	if h.Pop() != 1 {
		t.Fatal("min heap failed")
	}
}

func BenchmarkHeapPush(b *testing.B) {
	h := New()
	for i := 0; i < b.N; i++ {
		h.Push(i)
	}
}
