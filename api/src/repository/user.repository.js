import { _connect } from "../config/index.js"
import User from "../model/user.model.js"
import { hash as _hash } from 'bcrypt'
import validatePassword from '../lib/core/validation/password.js'

export default class UserRepository {
  constructor() {
    _connect()
  }

  async createUser(user) {
    let data = {}
    let message = ""
    let statusCode

    try {
      const isValid = validatePassword(user.password)

      if (!isValid) {
        throw new Error('Invalid Password')
      }

      const hash = await _hash(user.password, 10)
      Object.assign(user, { password: hash })
      data = await User.create(user)
      message = "Created user successfully."
      statusCode = 200
    } catch (err) {
      statusCode = 400
      message = "Created failed."
      console.error("Error:::" + err)
    }

    return {
      statusCode,
      message,
      data,
    }
  }

  async getUsers() {
    let data = []
    let message = ""
    let statusCode

    try {
      data = await User.find({})
      message = "Get all users successfully."
      statusCode = 200
    } catch (err) {
      statusCode = 400
      message = "Get all users failed."
      console.error("Error:::" + err)
    }

    return {
      statusCode,
      message,
      data,
    }
  }

  async getUserById(userId) {
    let data = {}
    let message = ""
    let statusCode

    try {
      data = await User.findById(userId)
      message = "Get a user detail successfully."
      statusCode = 200
    } catch (error) {
      statusCode = 400
      message = "Get a user failed."
      console.error("Error:::" + err)
    }

    return {
      statusCode,
      message,
      data,
    }
  }

  async updateUser(user) {
    let data = {}
    let message = ""
    let statusCode

    try {
      if (user.password) delete user.password
      data = await User.findByIdAndUpdate({ _id: user._id }, { ...user })
      message = "Updated user successfully."
      statusCode = 200
    } catch (err) {
      statusCode = 400
      message = "Updated failed."
      console.error("Error:::" + err)
    }

    return {
      statusCode,
      message,
    }
  }

  async deleteUser(userId) {
    let data = {}
    let message = ""
    let statusCode

    try {
      data = await User.deleteOne({ _id: userId })
      message = "Deleted a user successfully."
      statusCode = 200
    } catch (err) {
      statusCode = 400
      message = "Deleted a user failed."
      console.error("Error:::" + err)
    }

    return {
      statusCode,
      message,
    }
  }
}
