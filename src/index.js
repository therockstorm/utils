// @flow
const TEST_ENV = process.env.ENVIRONMENT === 'test'

const l = (func: string => void, msg: string, isTest: boolean = TEST_ENV) =>
  isTest ? undefined : func(msg)

const log = (msg: string) => l(console.log, msg)
const debug = (msg: string) => l(console.debug, `[debug] ${msg}`)
const info = (msg: string) => l(console.info, `[info] ${msg}`)
const warn = (msg: string) => l(console.warn, `[warn] ${msg}`)
const error = (msg: string) => l(console.error, `[error] ${msg}`)

const required = (val: mixed, name: string): any => {
  if (val) return val
  throw new Error(`${name} required`)
}

const envVar = (name: string): string => required(process.env[name], name)

module.exports = {
  log,
  debug,
  info,
  warn,
  error,
  envVar,
  required
}
