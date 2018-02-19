const assert = require('assert')
const sinon = require('sinon')
const utils = require('../src/index')

const sandbox = sinon.createSandbox()

describe('log and error', () => {
  const MSG = 'log msg'
  let logStub, errorStub

  beforeEach(() => {
    logStub = sandbox.stub(console, 'log')
    errorStub = sandbox.stub(console, 'error')
  })
  afterEach(() => sandbox.restore())

  it('logs', () => {
    utils.log(MSG)

    assert(logStub.calledWith('[INFO]', MSG))
    assert(!errorStub.called)
  })

  it('log logs error', () => {
    utils.log(MSG, true)

    assert(!logStub.called)
    assert(errorStub.calledWith('[ERROR]', MSG))
  })

  it('error logs error', () => {
    utils.error(MSG)

    assert(!logStub.called)
    assert(errorStub.calledWith('[ERROR]', MSG))
  })

  it('does not log in test environment', () => {
    utils.log(MSG, true, true)

    assert(!logStub.called)
    assert(!errorStub.called)
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
