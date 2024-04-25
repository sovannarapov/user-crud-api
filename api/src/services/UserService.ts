import { Service } from 'typedi'
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { ObjectId } from 'mongodb';
import validatePassword from '../lib/core/validations/password';

@Service()
export class UserService {
  public async createUser(user: User): Promise<User | any> {
    const isValidPassword = validatePassword(user.password);

    if (!isValidPassword) {
      throw new Error('Invalid Password');
    }

    await UserRepository.save(user, { chunk: 1000 });
  }

  public async getUsers(): Promise<any> {
    const users = await UserRepository.find();
    console.info('User >>>', users)

    users.map((user) => delete user.password);

    return users;
  }

  public async getUser(id: string): Promise<User> {
    const _id = new ObjectId(id);
    const user = await UserRepository.findOneBy({ _id });

    return user
  }

  public async updateUser(user: User): Promise<any> {
    // const isFound = await this.getUser(user._id.toString());
    // console.info('isFound >>>', isFound)

    // return isFound;

    // if (!isFound) return;

    // await UserRepository.update(foundUser._id, { ...user });
  }

  async deleteUser(userId: string) {
    // return this._repo.deleteUser(userId)
  }
}
