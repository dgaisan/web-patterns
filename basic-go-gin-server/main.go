package main

import (
	"context"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/go-redis/redis/v8"

	"log"

	"os"
)

type User struct {
	Id        string
	FirstName string
	LastName  string
	Email     string
}

var redisClient *redis.Client
var userMap map[string]User

var ctx = context.Background()

func createRouter() *gin.Engine {
	router := gin.Default()
	userMap = make(map[string]User)
	redisClient = redis.NewClient(&redis.Options{
		Addr:     strEnv("REDIS_HOST", "localhost:6379"),
		Password: strEnv("REDIS_PASSWORD", ""),
		DB:       intEnv("REDIS_DB", 0),
	})

	pong, err := redisClient.Ping(ctx).Result()
	if err != nil {
		fmt.Println("Error creating redis server")
		log.Fatalf("Could not connect to Redis: %v", err)
		panic(1)
	}
	fmt.Println("Connected to Redis:", pong)
	log.Println("Connected to Redis:", pong)

	// TODO: start caching values

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

func strEnv(key, fallback string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	return fallback
}

func intEnv(key string, fallback int) int {
	if val, ok := os.LookupEnv(key); ok {
		if ret, err := strconv.Atoi(val); err != nil {
			return ret
		}
	}
	return fallback
}

func main() {
	router := createRouter()
	router.Run(strEnv("PORT", ":8001"))
}
