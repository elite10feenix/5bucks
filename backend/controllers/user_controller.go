// controllers/admin_controller.go
package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserList(c *gin.Context) {
	c.String(http.StatusOK, "User List")
}

func UserCreate(c *gin.Context) {
	c.String(http.StatusOK, "User Create")
}
