const typeDefs = `type DownloadKey {
  # Numeric ID of the download key
  id: ID!
  # Creation timestamp
  created_at: String
  # Number of downlaods associated with the key
  downloads: Int
  # The key itself
  key: String
  # The ID of the game that the key is associated with
  game_id: Int
  # The account who owns the key
  owner: User
}
`

export { typeDefs }
