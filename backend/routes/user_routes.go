// routes/user_routes.go
package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	user := r.Group("/user")
	{
		user.POST("/updateinfo", controllers.UpdateInfoHandler)
	}
}
