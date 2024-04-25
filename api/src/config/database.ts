// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import logger from '../lib/logger/logger'
//
// dotenv.config()
//
// export function _connect() {
//   const databaseUrl = `${process.env.MONGO_PROTOCOL || 'http'}://${process.env.MONGO_HOST || '127.0.0.1'}:${process.env.MONGO_PORT || '27017'}/${process.env.MONGO_DATABASE || ''}`
//
//   logger.info("MONGO_DATABASE_URL: " + databaseUrl)
//
//   mongoose.connect(databaseUrl)
//
//   mongoose.connection.once("open", async () => {
//     logger.info("Connected to database")
//   })
//
//   mongoose.connection.on("error", (err) => {
//     logger.error("Error connecting to database  ", err)
//   })
// }
//
// export function _disconnect() {
//   if (!mongoose.connection) {
//     return
//   }
//
//   mongoose.disconnect()
//
//   mongoose.connection.once("close", async () => {
//     logger.info("Diconnected  to database")
//   })
// }
import { DataSource } from "typeorm";
import {User} from "../entities/User";
import logger from "./logger";
import dotenv from 'dotenv';

dotenv.config();

const MongoDataSource = new DataSource({
  type: "mongodb",
  url: `${process.env.MONGO_PROTOCOL || 'http'}://${process.env.MONGO_HOST || '127.0.0.1'}:${process.env.MONGO_PORT || '27017'}/${process.env.MONGO_DATABASE || ''}`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: [User]
});

MongoDataSource.initialize().then(() => logger.info("Connected to database"))
    .catch((err) => logger.error("Error connecting to database  ", err));

export const dataSource = MongoDataSource;
