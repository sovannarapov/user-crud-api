import dotenv from 'dotenv'
import express from "express"
import { readFileSync } from "fs"
import { parse } from 'yaml'
import { serve, setup } from "swagger-ui-express"
import userRoutes from "./routes/user.js"
import mogranMiddleware from './lib/middleware/morgan.middleware.js'
import logger from './lib/logger/logger.js'

const app = express()
const file = readFileSync('src/public/doc/app/swagger.yaml', 'utf8')
const swaggerDocument = parse(file)

dotenv.config()

app.use(mogranMiddleware)
app.use(express.json())
app.use(
  "/api/docs",
  serve,
  setup(swaggerDocument)
)
app.use("/api", userRoutes)

app.listen(process.env.APP_PORT, () => {
  logger.info(`Server started at http://localhost:${process.env.APP_PORT || 3000}`)
})
