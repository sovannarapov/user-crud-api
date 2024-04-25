import 'reflect-metadata';

import express from 'express';
import dotenv from "dotenv"
import { readFileSync } from "fs"
import { parse } from 'yaml'
import { serve, setup } from 'swagger-ui-express'
import mogranMiddleware from './lib/core/middlewares/morgan.middleware'
import logger from './config/logger'
import { createExpressServer } from 'routing-controllers'
import { UserController } from './controllers/UserController';


const app = createExpressServer({
  routePrefix: '/api',
  controllers: [UserController],
  middlewares: [mogranMiddleware],
});
const file = readFileSync('src/public/doc/app/swagger.yaml', 'utf8')
const swaggerDocument = parse(file)

dotenv.config()

app.use(express.json())
app.use(
  "/api/docs",
  serve,
  setup(swaggerDocument)
)


app.listen(process.env.APP_PORT, () => {
  logger.info(`Server started at http://localhost:${process.env.APP_PORT || 3000}`)
})
