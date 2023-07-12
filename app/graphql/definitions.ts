import usersMutations from '../services/users/mutations'

const typeDefs = `
  scalar DateTime

  type Query {
    hello: String
  }
`
export default [typeDefs, usersMutations]
