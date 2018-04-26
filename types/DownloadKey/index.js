const typeDefs = `type DownloadKey {
  id: ID
  created_at: String
  downloads: Int
  key: String
  game_id: Int
  owner: User
}
`

export { typeDefs }
