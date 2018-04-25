import test from 'ava'
import { request, plugins } from 'popsicle'

require('dotenv').config()

const headers = {
  Authorization: `Bearer ${process.env.ITCH_TOKEN}`
}

test('returns scope info', async t => {
  const res = await request({
    method: 'GET',
    url: 'https://itch.io/api/1/key/credentials/info',
    headers
  }).use(plugins.parse('json'))

  t.is(res.status, 200)
  t.deepEqual(res.body, {})
})

test('returns profile info', async t => {
  const keys = [
    'cover_url',
    'display_name',
    'developer',
    'id',
    'url',
    'gamer',
    'username',
    'press_user'
  ].sort()

  const res = await request({
    method: 'GET',
    url: 'https://itch.io/api/1/key/me',
    headers
  }).use(plugins.parse('json'))

  t.is(res.status, 200)
  t.deepEqual(Object.keys(res.body.user).sort(), keys)
})

test('returns games info', async t => {
  const rootKeys = new Set([
    'purchases_count',
    'p_osx',
    'id',
    'published',
    'published_at',
    'views_count',
    'url',
    'can_be_bought',
    'p_android',
    'p_linux',
    'p_windows',
    'in_press_system',
    'user',
    'has_demo',
    'downloads_count',
    'title',
    'created_at',
    'cover_url',
    'min_price',
    'classification',
    'short_text',
    'type'
  ])
  const userKeys = ['display_name', 'id', 'url', 'cover_url', 'username'].sort()

  const res = await request({
    method: 'GET',
    url: 'https://itch.io/api/1/key/my-games',
    headers
  }).use(plugins.parse('json'))

  for (let game of res.body.games) {
    for (let key of Object.keys(game)) {
      t.true(rootKeys.has(key))
    }
    t.deepEqual(Object.keys(game.user).sort(), userKeys)
  }
})

test('returns download key', async t => {
  const rootKeys = [
    'id',
    'created_at',
    'downloads',
    'key',
    'game_id',
    'owner'
  ].sort()
  const ownerKeys = [
    'display_name',
    'gamer',
    'username',
    'id',
    'url',
    'press_user',
    'developer',
    'cover_url'
  ].sort()

  const buildParams = url => {
    let params = ''
    if (process.env.USER_ID || process.env.EMAIL || process.env.DOWNLOAD_KEY) {
      let base = '?'
      params = base.concat(
        process.env.USER_ID ? `user_id=${process.env.USER_ID}` : '',
        process.env.EMAIL ? `email=${process.env.EMAIL}` : '',
        process.env.DOWNLOAD_KEY
          ? `download_key=${process.env.DOWNLOAD_KEY}`
          : ''
      )
    }
    return `${url}${params}`
  }

  const res = await request({
    method: 'GET',
    url: buildParams(
      `https://itch.io/api/1/key/game/${process.env.GAME_ID}/download_keys`
    ),
    headers
  }).use(plugins.parse('json'))

  if (res.body.errors) {
    t.is(
      res.body.errors['0'],
      'no download key found' || 'invalid download key'
    )
  } else {
    for (let key of Object.keys(res.body.download_key)) {
      t.true(rootKeys.has(key))
    }
    t.deepEqual(Object.keys(res.body.owner).sort(), ownerKeys)
  }
})
