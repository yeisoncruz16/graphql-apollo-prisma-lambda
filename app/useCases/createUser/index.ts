import { PrismaClient } from '@prisma/client'
import { type UserType } from '../../services/users/types'
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
const prisma = new PrismaClient()

export default class CreateUser {
  async run (data: UserType): Promise<any> {
    try {
      return await prisma.users.create({ data })
    } catch (error: any) {
      console.log(error)
      throw new Error('The user could not be created')
    }
  };
}
