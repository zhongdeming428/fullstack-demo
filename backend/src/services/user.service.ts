import { user } from '../database/models/entities/user';
import { getRepository, Repository } from 'typeorm';
import { genUUID } from '../common/utils';

export interface IAddUser {
  name: string;
  username: string;
  psw: string;
  gender: boolean;
  address?: string;
  phone: string;
  email?: string;
}

class UserService {
  public async get(id: string) {
    const res = await getRepository(user).findOne(id);
    return res;
  }
  public async add(userInfo: IAddUser) {
    const res = await getRepository(user).insert({
      ...userInfo,
      id: genUUID()
    });
    return res;
  }
}

export default new UserService();
