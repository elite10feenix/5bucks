package controllers

import (
	"backend/config"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// UserLogin represents the structure for login requests
type UserLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// LoginHandler handles user login and generates a JWT token
func LoginHandler(c *gin.Context) {
	var loginDetails UserLogin
	if err := c.ShouldBindJSON(&loginDetails); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Uncomment and implement your user authentication logic if needed
	// var user models.User
	// result := config.DB.Where("username = ?", loginDetails.Username).First(&user)
	// if result.Error != nil || bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginDetails.Password)) != nil {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
	// 	return
	// }

	// Generate JWT token
	token, err := generateToken(loginDetails.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

// LogoutHandler handles user logout
func LogoutHandler(c *gin.Context) {
	// JWT tokens are stateless, so logging out on the server side isn't required.
	c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}

func UserHandler(c *gin.Context) {
	fmt.Println("Entering UserHandler")
	tokenString := c.GetHeader("Authorization")
	if tokenString == "" {
		fmt.Println("No token provided")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
		return
	}

	// Remove "Bearer " prefix if it exists
	if len(tokenString) > 7 && tokenString[:7] == "Bearer " {
		tokenString = tokenString[7:]
	}

	// Parse the token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return config.JwtSecret, nil
	})

	if err != nil {
		fmt.Println("Error parsing token:", err)
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		return
	}

	if !token.Valid {
		fmt.Println("Token is not valid")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
		return
	}

	// Extract claims
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		fmt.Println("Invalid token claims")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	// Extract username from claims
	username, ok := claims["username"].(string)
	if !ok {
		fmt.Println("Invalid username in claims")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		return
	}

	fmt.Println("Authenticated username:", username)
	c.JSON(http.StatusOK, gin.H{"username": username})
}

// generateToken creates a new JWT token for the given username
func generateToken(username string) (string, error) {
	tokenClaims := jwt.MapClaims{
		"username": username,
		"exp":      time.Now().Add(time.Hour * 24).Unix(), // Token valid for 24 hours
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, tokenClaims)
	return token.SignedString(config.JwtSecret)
}
