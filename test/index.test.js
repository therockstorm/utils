const assert = require('assert')
const sinon = require('sinon')
const utils = require('../src/index')

const sandbox = sinon.createSandbox()

afterEach(() => sandbox.restore())

describe('console', () => {
  const ms = ['log', 'debug', 'info', 'warn', 'error']

  const log = (x, ...args) => {
    const captured = []

    const capture = streams =>
      streams.map(s => {
        const old = s.write
        s.write = str => captured.push(str.replace(/\n$/, ''))
        return () => (s.write = old)
      })

    const restore = capture([process.stdout, process.stderr])
    ms.forEach(m => (args ? utils[m](x, ...args) : utils[m](x)))
    restore.map(s => s())

    return captured
  }

  const expected = ex => [
    ex,
    `[debug] ${ex}`,
    `[info] ${ex}`,
    `[warn] ${ex}`,
    `[error] ${ex}`
  ]

  it('logs string', () => assert.deepEqual(log('log'), expected('log')))

  it('logs multiple strings', () =>
    assert.deepEqual(log('log', 'me'), expected('log me')))

  it('logs object', () =>
    assert.deepEqual(log({ log: 'me' }), expected(`{ log: 'me' }`)))

  it('logs array', () =>
    assert.deepEqual(log(['log', 'me']), expected(`[ 'log', 'me' ]`)))
})

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
