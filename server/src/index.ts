import { env } from './env'
import app from './app'

app.listen(env.PORT)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)
