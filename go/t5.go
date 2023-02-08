package main

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

type t5 struct {
	Data []deta `json:"data"`
}
type deta struct {
	Name string `json:"name"`
	Pv   int    `json:"pv"`
}

func T5(c *fiber.Ctx) error {
	var tbl5 = t5{
		Data: []deta{},
	}
	for i := 0; i < 7; i++ {
		tbl5.Data = append(tbl5.Data, deta{
			Name: dynamicWord(),
			Pv:   rand.Intn(3000),
		})
	}
	return c.Status(200).JSON(tbl5)
}
