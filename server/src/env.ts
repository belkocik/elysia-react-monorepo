import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { z } from 'zod'

// 🗂️ Selecting the .env.[NODE_ENV] file
const NODE_ENV = process.env.NODE_ENV || 'development'

const envFile = path.resolve(process.cwd(), `.env.${NODE_ENV}`)
const fallbackFile = path.resolve(process.cwd(), `.env`)
const pathToUse = existsSync(envFile) ? envFile : fallbackFile

// 🌱 Load environment variables from the appropriate file
expand(config({ path: pathToUse }))

// ✅ Validation
const EnvSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.enum([
      'fatal',
      'error',
      'warn',
      'info',
      'debug',
      'trace',
      'silent'
    ]),
    DATABASE_URL: z.url(),
    POSTGRES_HOST: z.string().default('localhost'),
    POSTGRES_PORT: z.coerce.number().default(5432),
    POSTGRES_USER: z.string().default('user'),
    POSTGRES_PASSWORD: z.string().default('password'),
    POSTGRES_DB: z.string().default('elysia_dev_db'),
    DATABASE_AUTH_TOKEN: z.string().optional()
  })
  .refine((env) => env.NODE_ENV !== 'production' || !!env.DATABASE_AUTH_TOKEN, {
    path: ['DATABASE_AUTH_TOKEN'],
    message: 'Must be set in production'
  })

const parsed = EnvSchema.safeParse(Bun.env)

if (!parsed.success) {
  console.error('❌ Invalid environment variables:')
  console.error(JSON.stringify(z.treeifyError(parsed.error), null, 2))
  process.exit(1)
}

// 🧠 Final environment
const baseEnv = parsed.data

export const env = {
  ...baseEnv,
  isProd: baseEnv.NODE_ENV === 'production',
  isDev: baseEnv.NODE_ENV === 'development',
  isTest: baseEnv.NODE_ENV === 'test'
} as const

export type Env = typeof env
