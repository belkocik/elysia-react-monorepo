import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { pinoLogger } from './middlewares/pino-logger'
import { routes } from './routes'

const app = new Elysia().use(cors()).use(pinoLogger).use(routes)

export type App = typeof app

export default app
