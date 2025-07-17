import { pinoLogger } from '@server/middlewares/pino-logger'
import { Elysia } from 'elysia'

export const testRoute = new Elysia({ prefix: '/test' })
  .use(pinoLogger)
  .get('/', (c) => {
    c.log.info('Test route accessed')
    return {
      message: 'Hello from Test!',
      success: true
    }
  })
