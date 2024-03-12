import dotenv from 'dotenv'
import express from "express"
import { readFileSync } from "fs"
import { parse } from 'yaml'
import { serve, setup } from "swagger-ui-express"
import router from "./routes/user.js"

const app = express()
const file = readFileSync('src/public/doc/app/swagger.yaml', 'utf8')
const swaggerDocument = parse(file)

dotenv.config()

app.use(express.json())
app.use(
  "/api/docs",
  serve,
  setup(swaggerDocument)
)
app.use("/api", router)

app.listen(process.env.APP_PORT, () => {
  console.info(`Server started at http://localhost:${process.env.APP_PORT || 3000}`)
})
