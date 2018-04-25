import test from 'ava'
import { request, plugins } from 'popsicle'

require('dotenv').config()

const itchToken = process.env.ITCH_TOKEN

test('returns scope info', async t => {
  const res = await request({
    method: 'GET',
    url: 'https://itch.io/api/1/key/credentials/info',
    headers: {
      Authorization: `Bearer ${itchToken}`
    }
  }).use(plugins.parse('json'))

  t.is(res.status, 200)
  t.deepEqual(res.body, {})
})
