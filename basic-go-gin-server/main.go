package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	Id        string
	FirstName string
	LastName  string
	Email     string
}

var userMap = make(map[string]User)

func createRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "pong")
	})

	router.GET("/users", func(context *gin.Context) {
		users := []string{}
		for _, u := range userMap {
			users = append(users, u.FirstName+" "+u.LastName)
		}
		context.JSON(http.StatusOK, users)
	})

	router.POST("user", func(context *gin.Context) {
		var user User
		if err := context.Bind(&user); err != nil {
			context.String(http.StatusOK, "Error: Unable to create a User")
		} else {
			userMap[user.Id] = user
			context.JSON(http.StatusCreated, gin.H{"user": user.FirstName + " " + user.LastName, "created": true})
		}
	})

	return router
}

func main() {
	router := createRouter()
	router.Run(":8001")
}
