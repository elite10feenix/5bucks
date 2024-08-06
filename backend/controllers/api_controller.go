package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Example data structure
type HomeData struct {
	Message string `json:"message"`
}

// Handler to get data for the Home page
func GetHomeData(c *gin.Context) {
	data := HomeData{
		Message: "Welcome to the Home Page!",
	}
	c.JSON(http.StatusOK, data)
}
