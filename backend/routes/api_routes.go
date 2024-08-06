// routes/api_routes.go
package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func ApiRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/home", controllers.GetHomeData)
	}
}
