import container from '../dependencyInjection'

const createUser = (): any => {
  container.get('services.user').createUser()
  return {
    name: 'yac'
  }
}

export default {
  Mutation: {
    createUser
  }
}
