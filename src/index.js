// @flow
const TEST_ENV = process.env.ENVIRONMENT === 'test'

const handler = prefix => (target, that, args) =>
  TEST_ENV
    ? undefined
    : !args || !prefix
      ? target(...args)
      : target(`[${prefix}]`, args.shift(), ...args)

const pConsole = {}
pConsole.log = new Proxy(console.log, { apply: handler() })
const ms = ['debug', 'info', 'warn', 'error']
ms.forEach(m => (pConsole[m] = new Proxy(console[m], { apply: handler(m) })))

const thrw = err => {
  if (err instanceof Error) throw err
  throw new Error(err)
}

const required = (val: mixed, name: string): any =>
  val || thrw(`${name} required`)

const envVar = (name: string): string => required(process.env[name], name)

const once = (fn, context) => {
  let result
  return () => {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

module.exports = {
  log: pConsole.log,
  debug: pConsole.debug,
  info: pConsole.info,
  warn: pConsole.warn,
  error: pConsole.error,
  envVar,
  thrw,
  required,
  once
}
