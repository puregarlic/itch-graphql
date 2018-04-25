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
