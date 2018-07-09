const assert = require('assert')
const sinon = require('sinon')
const utils = require('../src/index')

const MSG = 'my msg'
const sandbox = sinon.createSandbox()

describe('log', () => {
  it('logs', () => {
    const stub = sandbox.stub(console, 'log')

    utils.log(MSG)

    assert(stub.calledWith(MSG))
    sandbox.restore()
  })
})

describe('debug', () => {
  it('logs', () => {
    const stub = sandbox.stub(console, 'debug')

    utils.debug(MSG)

    assert(stub.calledWith(`[debug] ${MSG}`))
    sandbox.restore()
  })
})

describe('info', () => {
  it('logs', () => {
    const stub = sandbox.stub(console, 'info')

    utils.info(MSG)

    assert(stub.calledWith(`[info] ${MSG}`))
    sandbox.restore()
  })
})

describe('warn', () => {
  it('logs', () => {
    const stub = sandbox.stub(console, 'warn')

    utils.warn(MSG)

    assert(stub.calledWith(`[warn] ${MSG}`))
    sandbox.restore()
  })
})

describe('error', () => {
  it('logs', () => {
    const stub = sandbox.stub(console, 'error')

    utils.error(MSG)

    assert(stub.calledWith(`[error] ${MSG}`))
    sandbox.restore()
  })
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
