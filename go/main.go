package main

import (
	"math/rand"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// generate rendom string function
func generateRandomNumber() string {
	num := rand.Intn(100)
	return strconv.Itoa(num)
}

func main() {

	app := fiber.New()

	// cors
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Get("/1", T1)
	app.Get("/2", T2)
	app.Get("/3", T3)
	app.Get("/5", T5)

	app.Listen(":8080")
}
