package main

import (
    "fmt"
    "net"
    "sync"
)

func main() {
    var wg sync.WaitGroup

    for port := 1; port < 1024; port++ {
        wg.Add(1)
        go func(port int) {
            defer wg.Done()
            addr := fmt.Sprintf("scanme.nmap.org:%d", port)
            conn, err := net.Dial("tcp", addr)
            if err != nil {
                return
            }
            conn.Close()
            fmt.Printf("Port %d is opened\n", port)
        }(port)
    }
    wg.Wait()
}
