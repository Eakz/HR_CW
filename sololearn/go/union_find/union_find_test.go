package dsu

import "testing"

func TestDSU(t *testing.T) {
	d := New(5)
	d.Union(0, 1)
	d.Union(1, 2)
	if d.Find(0) != d.Find(2) {
		t.Fatal("union find failed")
	}
}

func BenchmarkDSU(b *testing.B) {
	d := New(b.N)
	for i := 1; i < b.N; i++ {
		d.Union(i-1, i)
	}
}
