import mongoose from 'mongoose'
import dotenv from 'dotenv'
import logger from '../lib/logger/logger.js'

dotenv.config()

export function _connect() {
  const databaseUrl = `${process.env.MONGO_PROTOCOL || 'http'}://${process.env.MONGO_HOST || '127.0.0.1'}:${process.env.MONGO_PORT || '27017'}/${process.env.MONGO_DATABASE || ''}`

  logger.info("MONGO_DATABASE_URL: " + databaseUrl)

  mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.once("open", async () => {
    logger.info("Connected to database")
  })

  mongoose.connection.on("error", (err) => {
    logger.error("Error connecting to database  ", err)
  })
}

export function _disconnect() {
  if (!mongoose.connection) {
    return
  }

  mongoose.disconnect()

  mongoose.connection.once("close", async () => {
    logger.info("Diconnected  to database")
  })
}
