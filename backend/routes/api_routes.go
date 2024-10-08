// routes/api_routes.go
package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func ApiRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		// api.GET("/home", controllers.GetHomeData)
		api.POST("/login", controllers.LoginHandler)
		api.POST("/logout", controllers.LogoutHandler)
		api.POST("/register", controllers.RegisterHandler)
		api.POST("/changepassword", controllers.ChangePasswordHandler)
		api.GET("/user", controllers.UserHandler)
	}
}
