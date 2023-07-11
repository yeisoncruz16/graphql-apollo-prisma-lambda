import CreateUser from '../useCases/createUser'

export default class UserService {
  constructor () {
    console.log('===')
  }

  createUser (): void {
    const userData = {
      first_name: 'john',
      last_name: 'smith',
      email: 'john@example.com',
      password: 'password123',
      avatar: 'my-avatar.jpg',
      phone: '+57 3174645299'
    }

    new CreateUser().run(userData)
      .then((newUser: any) => {
        console.log('======== User created:', newUser)
      })
      .catch((error: any) => {
        console.error('========= Error creating user:', error)
      })
  }
}
