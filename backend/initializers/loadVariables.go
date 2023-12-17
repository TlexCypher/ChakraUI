package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadVariables() {
	err := godotenv.Load()

	if err != nil {
		log.Fatalln("Error has been occured when it comes to load variables.")
	}
}
