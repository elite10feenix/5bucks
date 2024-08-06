// routes/setup_routes.go
package routes

import (
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	ApiRoutes(r)
	AdminRoutes(r)
	UserRoutes(r)
}
