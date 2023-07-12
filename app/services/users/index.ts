import type CreateUser from '../../useCases/createUser'
import { type UserType } from './types'

export default class UserService {
  constructor (private readonly createUserCase: CreateUser) {
  }

  async createUser (data: UserType): Promise<UserType> {
    return await this.createUserCase.run(data)
  }
}
