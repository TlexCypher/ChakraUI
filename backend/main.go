package main

import (
	"chakrauibackend/controllers"
	"chakrauibackend/initializers"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadVariables()
	initializers.ConnectDB()
}

func main() {
	r := gin.Default()
	r.POST("/register", controllers.RegisterTask)
	r.GET("/alltasks", controllers.GetAllTasks)
	r.Run()
}
