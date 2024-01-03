package lru

import "testing"

func TestLRU(t *testing.T) {
	l := New(2)
	l.Put(1, 1)
	l.Put(2, 2)
	l.Put(3, 3)
	if l.Get(2) != -1 {
		t.Fatal("LRU eviction failed")
	}
}

func BenchmarkLRU(b *testing.B) {
	l := New(1000)
	for i := 0; i < b.N; i++ {
		l.Put(i, i)
		l.Get(i)
	}
}
