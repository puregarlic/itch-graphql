const typeDefs = `type Game {
  id: ID!
  purchasesCount: Int!
  downloadsCount: Int!
  osx: Boolean!
  android: Boolean!
  linux: Boolean!
  windows: Boolean!
  published: Boolean!
  publishedAt: String
  viewsCount: Int!
  url: String!
  canBeBought: Boolean!
  inPressSystem: Boolean!
  user: User!
  hasDemo: Boolean!
  title: String!
  createdAt: String!
  coverUrl: String!
  minPrice: Float!
  classification: String!
  shortText: String
  type: String!
}
`

const resolvers = {}

export { typeDefs, resolvers }
