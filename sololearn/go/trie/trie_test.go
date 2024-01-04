package trie

import "testing"

func TestTrie(t *testing.T) {
	tr := New()
	tr.Insert("go")
	tr.Insert("golang")
	if !tr.Search("go") || tr.Search("gone") {
		t.Fatal("trie failed")
	}
}

func BenchmarkTrie(b *testing.B) {
	tr := New()
	for i := 0; i < b.N; i++ {
		tr.Insert("benchmark")
	}
}
