const typeDefs = `type DownloadKey {
  id: ID
  createdAt: String
  downloads: Int
  key: String
  gameId: Int
  owner: User
}
`

const resolvers = {}

export { typeDefs, resolvers }
