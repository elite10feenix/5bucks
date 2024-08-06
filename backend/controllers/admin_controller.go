// controllers/admin_controller.go
package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AdminDashboard(c *gin.Context) {
	c.String(http.StatusOK, "Admin Dashboard")
}

func AdminSettings(c *gin.Context) {
	c.String(http.StatusOK, "Admin Settings")
}
