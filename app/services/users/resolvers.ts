import container from '../../dependencyInjection'
import { type UserType } from './types'

export const createUser = async (context: any, { input }: { input: UserType }): Promise<UserType> => {
  return container.get('services.user').createUser(input)
}
