import cors from '@elysiajs/cors'
import { Elysia } from 'elysia'
import type { ApiResponse } from 'shared/dist'

const app = new Elysia()
  .use(cors())
  .get('/', () => 'Hello Elysia')
  .get('/hello', () => {
    const data: ApiResponse = {
      message: 'Hello Elysia+React!',
      success: true
    }
    return data
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
