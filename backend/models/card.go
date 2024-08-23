package models

import (
	"gorm.io/gorm"
)

// User represents the structure of a user in the database
type Card struct {
	gorm.Model
	Username   string `json:"username"`
	CardType   string `json:"cardtype"`
	CardNumber string `json:"cardnumber"`
	CardName   string `json:"cardname"`
	MM         string `json:"mm"`
	YY         string `json:"yy"`
	CVV        string `json:"cvv"`
}

func (Card) TableName() string {
	return "tbl_cards" // Replace with your table name
}
