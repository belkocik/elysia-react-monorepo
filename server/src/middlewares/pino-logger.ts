// import { logger } from '@bogeychan/elysia-logger'
// import { env } from '@server/env'

// export function pinoLogger() {
//   return logger({
//     level: env.LOG_LEVEL || 'debug',
//     ...(env.isProd
//       ? undefined
//       : {
//           transport: {
//             target: 'pino-pretty',
//             options: {
//               colorize: true
//             }
//           }
//         })
//   })
// }

import { logger } from '@bogeychan/elysia-logger'
import { env } from '@server/env'
import { Elysia } from 'elysia'

export const pinoLogger = new Elysia({
  name: 'pino-logger'
}).use(
  logger({
    level: env.LOG_LEVEL || 'debug',
    ...(env.isProd
      ? undefined
      : {
          transport: {
            target: 'pino-pretty',
            options: {
              colorize: true
            }
          }
        })
  })
)
