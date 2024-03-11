import UserService from '../service/user.service.js'

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(user) {
    return this.userService.createUser(user);
  }

  async getUsers() {
    return this.userService.getUsers();
  }

  async getUserById(userId) {
    return this.userService.getUserById(userId);
  }

  async updateUser(user) {
    return this.userService.updateUser(user);
  }

  async deleteUser(userId) {
    return this.userService.deleteUser(userId);
  }
}
