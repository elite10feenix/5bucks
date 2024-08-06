// middleware/logging_middleware.go
package middleware

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func Logging() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		c.Next()
		log.Printf("Request %s %s took %v", c.Request.Method, c.Request.URL.Path, time.Since(start))
	}
}
