import { pinoLogger } from '@server/middlewares/pino-logger'
import { Elysia } from 'elysia'

export const helloRoute = new Elysia({ prefix: '/hello' })
  .use(pinoLogger)
  .get('/', (c) => {
    c.log.info('Hello route accessed')
    return {
      message: 'Hello from Elysia group!',
      success: true
    }
  })
