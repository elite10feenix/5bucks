package models

import (
	"gorm.io/gorm"
)

// User represents the structure of a user in the database
type User struct {
	gorm.Model
	Username string `gorm:"unique" json:"username"`
	Password string `json:"password"`
}

func (User) TableName() string {
	return "tbl_users" // Replace with your table name
}
