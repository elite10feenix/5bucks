// routes/admin_routes.go
package routes

import (
	"backend/controllers"
	"backend/middleware"

	"github.com/gin-gonic/gin"
)

func AdminRoutes(r *gin.Engine) {
	admin := r.Group("/admin")
	admin.Use(middleware.AdminAuth()) // Apply middleware to the /admin group
	{
		admin.GET("/dashboard", controllers.AdminDashboard)
		admin.GET("/settings", controllers.AdminSettings)
	}
}
