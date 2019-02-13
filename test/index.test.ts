import assert from 'assert'
const utils = require('../src')

describe('required', () => {
  const KEY = 'MY_KEY'

  it('returns val if exists', () => {
    assert.equal(utils.required(KEY, 'myKey'), KEY)
  })

  it('throws if does not exists', () => {
    const name = 'myKey'

    assert.throws(
      () => utils.required(undefined, name),
      Error,
      `${name} required`
    )
  })
})

describe('envVar', () => {
  const KEY = 'MY_KEY'

  afterEach(() => delete process.env[KEY])

  it('returns val if exists', () => {
    process.env[KEY] = 'myVal'

    assert.equal(utils.envVar(KEY), process.env[KEY])
  })

  it('throws if does not exists', () =>
    assert.throws(() => utils.envVar(KEY), Error, `${KEY} required`))
})
