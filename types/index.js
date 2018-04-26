import { request, plugins } from 'popsicle'

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

const scopeType = `type Scopes {
  scopes: [String]
  expires_at: String
}`

const typeDefs = [
  `type Query {
  # Returns information about the enabled API key/JWT's scopes
  info: Scopes
  # Returns the profile of the authenticated user
  me: User
  # Returns the games of the authenticated user
  games: [Game]
  # Returns the purchases of a game for a given user/email
  purchases(gameId: Int!, userId: Int, email: String): [Purchase]
  # Returns a game's download key for a given user/email/key ID
  downloadKey(gameId: Int!, userId: Int, email: String, key: String): DownloadKey
}`,
  userType,
  gameType,
  scopeType,
  purchaseType,
  downloadKeyType
]

const buildParams = (user, email, downloadKey) => {
  let params = ''
  if (user || email || downloadKey) {
    params = '?'.concat(
      user ? `user_id=${user}` : '',
      email ? `email=${email}` : '',
      downloadKey ? `download_key=${downloadKey}` : ''
    )
  }
  return params
}

const resolvers = {
  Query: {
    info (_, args, context) {
      return request({
        method: 'GET',
        url: 'https://itch.io/api/1/key/credentials/info',
        headers: {
          Authorization: context.authorization
        }
      }).use(plugins.parse('json'))
    },
    me (_, args, context) {
      return request({
        method: 'GET',
        url: 'https://itch.io/api/1/key/me',
        headers: {
          Authorization: context.authorization
        }
      })
        .use(plugins.parse('json'))
        .then(res => {
          return res.body.user
        })
    },
    games (_, args, context) {
      return request({
        method: 'GET',
        url: 'https://itch.io/api/1/key/my-games',
        headers: {
          Authorization: context.authorization
        }
      })
        .use(plugins.parse('json'))
        .then(res => {
          return res.body.games
        })
    },
    purchases (_, args, context) {
      return request({
        method: 'GET',
        url: `https://itch.io/api/1/key/game/${
          args.gameId
        }/purchases${buildParams(args.userId, args.email)}`,
        headers: {
          Authorization: context.authorization
        }
      })
        .use(plugins.parse('json'))
        .then(res => {
          return res.body.purchases
        })
    },
    downloadKey (_, args, context) {
      return request({
        method: 'GET',
        url: `https://itch.io/api/1/key/game/${
          args.gameId
        }/download_keys${buildParams(args.userId, args.email, args.key)}`,
        headers: {
          Authorization: context.authorization
        }
      })
        .use(plugins.parse('json'))
        .then(res => {
          return res.body.download_key
        })
    }
  },
  ...userResolvers,
  ...gameResolvers,
  ...purchaseResolvers,
  ...downloadKeyResolvers
}

export { typeDefs, resolvers }
