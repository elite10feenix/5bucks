package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Load configuration
	config.ConnectDatabase()

	// Create a new Gin engine instance
	r := gin.Default()

	// Serve static files from the React build directory
	r.Static("/static", "../frontend/build/static")
	r.StaticFile("/", "../frontend/build/index.html")

	// Load API routes
	routes.SetupRoutes(r)

	// Handle all other routes with React
	r.NoRoute(func(c *gin.Context) {
		c.File("../frontend/build/index.html")
	})

	// Start the server
	r.Run(":8080")
}
