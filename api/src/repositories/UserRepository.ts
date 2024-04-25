import { User } from '../entities/User';
import { dataSource } from '../config/database';

export class UserRepository {
    protected repository = dataSource.getRepository(User);
}
