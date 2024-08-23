// config/config.go
package config

import (
	"fmt"
	"log"
	"os"

	"backend/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	DB        *gorm.DB
	JwtSecret []byte
)

func ConnectDatabase() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Retrieve database configuration from environment variables
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	name := os.Getenv("DB_NAME")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")

	// Retrieve JWT secret from environment variables
	JwtSecret = []byte(os.Getenv("JWT_SECRET"))

	// Create DSN (Data Source Name)
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, port, name)

	// Open a connection to the database
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error connecting to the database: %v", err)
	}

	// Auto migrate the schema
	err = DB.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatalf("Error automigrating: %v", err)
	}

	err = DB.AutoMigrate(&models.Card{})
	if err != nil {
		log.Fatalf("Error automigrating: %v", err)
	}
}
