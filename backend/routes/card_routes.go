// routes/card_routes.go
package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func CardRoutes(r *gin.Engine) {
	user := r.Group("/card")
	{
		user.GET("/", controllers.CardsHandler)
		user.POST("/new/", controllers.NewCardHandler)
		user.DELETE("/remove/:id", controllers.RemoveCardHandler)
	}
}
