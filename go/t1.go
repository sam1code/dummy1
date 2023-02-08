package main

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

type Table1 struct {
	Data []Data `json:"data"`
}
type Session struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type NewUsers struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type BonusRate struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type AverageSessionDuration struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type Goal1 struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type Goal1Cvr struct {
	Data string `json:"data"`
	Aro  int    `json:"aro"`
}
type Data struct {
	Date                   string                 `json:"date"`
	Session                Session                `json:"session"`
	NewUsers               NewUsers               `json:"newUsers"`
	BonusRate              BonusRate              `json:"bonusRate"`
	AverageSessionDuration AverageSessionDuration `json:"averageSessionDuration"`
	Goal1                  Goal1                  `json:"goal1"`
	Goal1Cvr               Goal1Cvr               `json:"goal1cvr"`
}

func T1(c *fiber.Ctx) error {

	var tbl1 = Table1{
		Data: []Data{
			{
				// generaste dynamic data
				Date: "Today",
				Session: Session{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				NewUsers: NewUsers{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				BonusRate: BonusRate{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				AverageSessionDuration: AverageSessionDuration{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1: Goal1{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1Cvr: Goal1Cvr{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
			},
			{

				Date: "This Week",
				Session: Session{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				NewUsers: NewUsers{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				BonusRate: BonusRate{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},

				AverageSessionDuration: AverageSessionDuration{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1: Goal1{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1Cvr: Goal1Cvr{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
			},
			{

				Date: "This Month",
				Session: Session{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				NewUsers: NewUsers{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				BonusRate: BonusRate{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				AverageSessionDuration: AverageSessionDuration{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1: Goal1{
					Data: generateRandomNumber(),
					Aro:  rand.Intn(2),
				},
				Goal1Cvr: Goal1Cvr{
					Data: generateRandomNumber(),

					Aro: rand.Intn(2),
				},
			},
		},
	}

	return c.Status(200).JSON(tbl1)
}
