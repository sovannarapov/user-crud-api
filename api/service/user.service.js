import UserRepository from '../repository/user.repository.js'

export default class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async createUser(user) {
    return this.userRepo.createUser(user);
  }

  async getUsers() {
    return this.userRepo.getUsers();
  }

  async getUserById(userId) {
    return this.userRepo.getUserDetail(userId);
  }

  async updateUser(user) {
    return this.userRepo.updateUser(user);
  }

  async deleteUser(userId) {
    return this.userRepo.deleteUser(userId);
  }
}
