package controllers

import (
	"chakrauibackend/initializers"
	"chakrauibackend/models"
	"context"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func RegisterTask(c *gin.Context) {
	type body struct {
		Id          string
		Title       string
		Description string
		Author      string
		Img         string
	}

	var b body
	if err := c.BindJSON(&b); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err})
		return
	}

	coll := getCollection()

	doc := models.Task{
		Id:          b.Id,
		Title:       b.Title,
		Description: b.Description,
		Author:      b.Author,
		Img:         b.Img,
	}

	_, err := coll.InsertOne(context.TODO(), doc)
	if err != nil {
		log.Printf("Failed to insert data into db: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert data into the database."})
		return
	}

	defer func() {
		if err := initializers.Client.Disconnect(context.TODO()); err != nil {
			log.Fatalln("Failed to disconnect.")
		}
	}()
}

func GetAllTasks(c *gin.Context) {
	coll := getCollection()
	cur, err := coll.Find(context.TODO(), bson.D{})
	if err != nil {
		log.Printf("Failed to get all data from db %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get data from the database."})
		return
	}
	var res []models.Task

	if err = cur.All(context.TODO(), &res); err != nil {
		log.Printf("Failed to cursor all data from db %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to cursor data from the database."})
		return
	}
	c.JSON(http.StatusOK, res)
}

func getCollection() *mongo.Collection {
	return initializers.Client.Database(os.Getenv("DB_NAME")).Collection(os.Getenv("DB_COLLECTION"))
}
