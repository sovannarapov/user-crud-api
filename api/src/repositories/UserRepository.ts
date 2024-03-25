// import { _connect } from "../config"
// import { hash as _hash } from 'bcrypt'
// import validatePassword from '../lib/validation/password'
// import logger from '../lib/logger/logger'
// import { Repository, EntitySchema } from "typeorm";
// import { User } from "../entities/User";
// import { MongoDataSource } from "../app";
// import {Repository} from "typeorm";
// import {dataSource} from "../config";


import { dataSource } from "../config";
import { User } from "../entities/User";

export const UserRepository = dataSource.getRepository(User);

// @dataSource()
// export class UserRepository extends Repository<User> {}
  // constructor() {
  //   _connect()
  // }
  //
  // async createUser(user: { first_name: string, last_name: string, password: string }) {
  //   let data = {}
  //   let message = ""
  //   let statusCode: number
  //
  //   try {
  //     const isValid = validatePassword(user.password)
  //
  //     if (!isValid) {
  //       throw new Error('Invalid Password')
  //     }
  //
  //     const hash = await _hash(user.password, 10)
  //     Object.assign(user, { password: hash })
  //     data = await User.create(user)
  //     message = "Created user successfully."
  //     statusCode = 200
  //   } catch (error) {
  //     statusCode = 400
  //     message = "Created failed."
  //     logger.error("Error:::" + error)
  //   }
  //
  //   return {
  //     statusCode,
  //     message,
  //     data,
  //   }
  // }
  //
  // async getUsers(): Promise<any[]> {
  //   let data = []
  //   // let message = ""
  //   // let statusCode: number
  //
  //   try {
  //     data = await User.find({})
  //     // message = "Get all users successfully."
  //     // statusCode = 200
  //   } catch (error) {
  //     // statusCode = 400
  //     // message = "Get all users failed."
  //     logger.error("Error:::" + error)
  //   }
  //
  //   return data;
  // }
  //
  // async getUserById(userId: string) {
  //   let data = {}
  //   let message = ""
  //   let statusCode: number
  //
  //   try {
  //     data = await User.findById(userId)
  //     message = "Get a user detail successfully."
  //     statusCode = 200
  //   } catch (error) {
  //     statusCode = 400
  //     message = "Get a user failed."
  //     logger.error("Error:::" + error)
  //   }
  //
  //   return {
  //     statusCode,
  //     message,
  //     data,
  //   }
  // }
  //
  // async updateUser(user: { _id: string, first_name: string, last_name: string, password: string }) {
  //   let message = ""
  //   let statusCode
  //
  //   try {
  //     if (user.password) delete user.password
  //     await User.findByIdAndUpdate({ _id: user._id }, { ...user })
  //     message = "Updated user successfully."
  //     statusCode = 200
  //   } catch (error) {
  //     statusCode = 400
  //     message = "Updated failed."
  //     logger.error("Error:::" + error)
  //   }
  //
  //   return {
  //     statusCode,
  //     message,
  //   }
  // }
  //
  // async deleteUser(userId: string) {
  //   let message = ""
  //   let statusCode: number
  //
  //   try {
  //     await User.deleteOne({ _id: userId })
  //     message = "Deleted a user successfully."
  //     statusCode = 200
  //   } catch (error) {
  //     statusCode = 400
  //     message = "Deleted a user failed."
  //     logger.error("Error:::" + error)
  //   }
  //
  //   return {
  //     statusCode,
  //     message,
  //   }
  // }
// }
