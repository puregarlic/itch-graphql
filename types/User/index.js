const typeDefs = `type User {
  id: ID
  username: String
  gamer: Boolean
  displayName: String
  coverUrl: String
  url: String
  pressUser: Boolean
  developer: Boolean
}`

const resolvers = {}

export { typeDefs, resolvers }
