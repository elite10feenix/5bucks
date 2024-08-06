// routes/user_routes.go
package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	user := r.Group("/users")
	{
		user.GET("/", controllers.UserList)
		user.POST("/", controllers.UserCreate)
	}
}
