import bcrypt from 'bcrypt';
import { User } from '../../../entities/User';

export const comparePassword = function(user: User, password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
            return reject(err);
        }
        resolve(res);
    });
  });
}

export const hashPassword = function (password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return reject(err);
        }
        resolve(hash);
    });
  });
}
