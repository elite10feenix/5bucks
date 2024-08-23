// controllers/card_controller.go
package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type NewCardRequest struct {
	Username   string `json:"username" binding:"required"`
	CardType   string `json:"cardtype" binding:"required"`
	CardNumber string `json:"cardnumber" binding:"required"`
	CardName   string `json:"cardname" binding:"required"`
	MM         string `json:"MM" binding:"required"`
	YY         string `json:"YY" binding:"required"`
	CVV        string `json:"CVV" binding:"required"`
}

func NewCardHandler(c *gin.Context) {
	var req NewCardRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Check if user already exists
	if err := config.DB.Where("username = ?", req.Username).First(&models.User{}).Error; err != nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Can't find user"})
		return
	}

	newCard := models.Card{
		Username:   req.Username,
		CardType:   req.CardType,
		CardNumber: req.CardNumber,
		CardName:   req.CardName,
		MM:         req.MM,
		YY:         req.YY,
		CVV:        req.CVV,
	}

	if err := config.DB.Create(&newCard).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating card"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully new card created"})
}

func CardsHandler(c *gin.Context) {
	tokenString := c.GetHeader("Authorization")
	if tokenString == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
		return
	}

	// Parse the token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return config.JwtSecret, nil
	})
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		return
	}

	// Extract claims
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	// Extract username from claims
	username, ok := claims["username"].(string)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	// Retrieve user from database
	var user models.User
	result := config.DB.Where("username = ?", username).First(&user)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	var cards []models.Card
	if err := config.DB.Where("username = ?", username).Find(&cards).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve cards"})
		return
	}

	// Return user details
	c.JSON(http.StatusOK, gin.H{
		"cards": cards,
	})
}

func RemoveCardHandler(c *gin.Context) {
	// Get card ID from URL parameters
	cardID := c.Param("id")

	// Find and delete the card from the database
	if err := config.DB.Delete(&models.Card{}, "id = ?", cardID).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete card"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Card deleted successfully"})
}
