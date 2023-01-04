package main

import "fmt"

func Chaser(speed, time int) int {
	var n int
	if n1, n2 := speed/3+1, (time+1)/2; n1 < n2 {
		n = n1
	} else {
		n = n2
	}
	return (time+n)*speed - n*(n-1)*3/2
}

func main() {
	fmt.Println(Chaser(2, 4), 10)
	fmt.Println(Chaser(2, 3), 8)
	fmt.Println(Chaser(1, 1), 2)

}
