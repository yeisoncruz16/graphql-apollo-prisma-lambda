import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default class CreateUser {
  async run (userData: any): Promise<any> {
    const newUser = await prisma.users.create({
      data: userData
    })
    return newUser
  };
}
