package main

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

type TB2 struct {
	Data []data `json:"data"`
}
type data struct {
	Name      string `json:"name"`
	BonusRate int    `json:"BonusRate"`
	Sessions  int    `json:"Sessions"`
	Amt       int    `json:"amt"`
}

func dynamicWord() string {
	// dynamic word generator
	var word = []string{"page 1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10"}
	return word[rand.Intn(len(word))]
}

func T2(c *fiber.Ctx) error {
	var tbl2 = TB2{
		Data: []data{},
	}

	for i := 0; i < int(rand.Intn(20)); i++ {
		tbl2.Data = append(tbl2.Data, data{
			Name:      dynamicWord(),
			BonusRate: rand.Intn(100),
			Sessions:  rand.Intn(100),
			Amt:       rand.Intn(100),
		})
	}

	return c.Status(200).JSON(tbl2)
}
func T3(c *fiber.Ctx) error {
	var tbl2 = TB2{
		Data: []data{},
	}

	for i := 0; i < int(rand.Intn(20)); i++ {
		tbl2.Data = append(tbl2.Data, data{
			Name:      dynamicWord(),
			BonusRate: rand.Intn(100),
			Sessions:  rand.Intn(100),
			Amt:       rand.Intn(100),
		})
	}

	return c.Status(200).JSON(tbl2)
}
