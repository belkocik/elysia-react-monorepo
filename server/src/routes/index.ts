import { Elysia } from 'elysia'
import { helloRoute } from './hello.route'
import { testRoute } from './test.route'

export const routes = new Elysia().use(helloRoute).use(testRoute)
