import { typeDefs as userType, resolvers as userResolvers } from './User'
import { typeDefs as gameType, resolvers as gameResolvers } from './Game'
import {
  typeDefs as purchaseType,
  resolvers as purchaseResolvers
} from './Purchase'
import {
  typeDefs as downloadKeyType,
  resolvers as downloadKeyResolvers
} from './DownloadKey'

const typeDefs = [
  `type Query {
  # Returns information about the enabled API key/JWT's scopes
  info: [String]
  # Returns the profile of the authenticated user
  me: User
  # Returns the games of the authenticated user
  games: [Game]
  # Returns the purchases of a game for a given user/email
  purchases(game: Int!, userId: Int, email: String): [Purchase]
  # Returns a game's download key for a given user/email/key ID
  downloadKey(game: Int!, userId: Int, email: String, key: String): DownloadKey
}`,
  userType,
  gameType,
  purchaseType,
  downloadKeyType
]

const resolvers = {
  Query: {
    info (_, args, context) {},
    me (_, args, context) {},
    games (_, args, context) {},
    purchases (_, args, context) {},
    downloadKey (_, args, context) {}
  },
  ...userResolvers,
  ...gameResolvers,
  ...purchaseResolvers,
  ...downloadKeyResolvers
}

export { typeDefs, resolvers }
