// controllers/user_controller.go
package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type UpdateUserInfoRequest struct {
	NewUsername string `json:"newUsername" binding:"required"`
	NewFullname string `json:"newFullname" binding:"required"`
}

// ChangePasswordHandler handles user password change requests
func UpdateInfoHandler(c *gin.Context) {
	var req UpdateUserInfoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Extract the token from the Authorization header
	tokenString := c.GetHeader("Authorization")
	if tokenString == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
		return
	}

	// Parse the JWT token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return config.JwtSecret, nil
	})

	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		return
	}

	// Extract claims from the token
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	// Extract the username from the claims
	username, ok := claims["username"].(string)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	// Fetch the user from the database
	var user models.User
	result := config.DB.Where("username = ?", username).First(&user)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User not found"})
		return
	}

	// Check if user already exists
	if err := config.DB.Where("username = ?", req.NewUsername).First(&models.User{}).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "This username is already taken"})
		return
	}

	prevUsername := user.Username

	user.Username = req.NewUsername
	user.Fullname = req.NewFullname

	if err := config.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update username and fullname"})
		return
	}

	// Update the username in the Card model where the previous username matches
	if err := config.DB.Model(&models.Card{}).Where("username = ?", prevUsername).Update("username", user.Username).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update username in associated cards"})
		return
	}

	// Generate JWT token
	newToken, err := generateToken(user.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": newToken, "fullname": user.Fullname})
}
