// config/config.go
package config

import "os"

var (
	DBConnectionString string
)

func Load() {
	DBConnectionString = os.Getenv("DB_CONNECTION_STRING")
}
