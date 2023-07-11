package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func createRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "pong")
	})

	return router
}

func main() {
	router := createRouter()
	router.Run(":8001")
}
