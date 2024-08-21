package models

import (
	"gorm.io/gorm"
)

// User represents the structure of a user in the database
type User struct {
	gorm.Model
	Username     string `gorm:"unique;not null" json:"username"`
	Password     string `gorm:"not null" json:"password"`
	Fullname     string `json:"fullname"`
	CardNumber   string `json:"cardNumber"`
	ExpiryDate   string `json:"expiryDate"`
	CardName     string `json:"cardName"`
	CVV          string `json:"cvv"`
	Country      string `json:"country"`
	City         string `json:"city"`
	PostCode     string `json:"postCode"`
	Street       string `json:"street"`
	PhoneCode    string `json:"phoneCode"`
	MobileNumber string `json:"mobileNumber"`
	IMBG         string `json:"imbg"`
	DobDay       string `json:"dobDay"`
	DobMonth     string `json:"dobMonth"`
	DobYear      string `json:"dobYear"`
	Email        string `gorm:"unique;not null" json:"email"`
}

func (User) TableName() string {
	return "tbl_users" // Replace with your table name
}
