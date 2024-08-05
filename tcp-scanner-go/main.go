package main

import (
    "fmt"
    "sync"
)

func worker(ports chan int, wg *sync.WaitGroup) {
    for p := range ports {
        fmt.Println(p)
        wg.Done()
    }
}

func main() {
    var wg sync.WaitGroup
    ports := make(chan int, 100)

    for i := 1; i < cap(ports); i++ {
        go worker(ports, &wg)
    }
    for i:= 1; i< 1024; i++ {
        wg.Add(1)
        ports <- i
    }
    wg.Wait()
    close(ports)
}
