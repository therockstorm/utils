const TEST_ENV = process.env.ENVIRONMENT === 'test'

const l = (fn: any, first: any, ...rest: any[]) => {
  TEST_ENV ? null : first ? fn(first, ...rest) : fn(...rest)
}

const log = (...args: any[]): void => l(console.log, null, ...args)
const debug = (...args: any[]): void => l(console.debug, '[debug]', ...args)
const info = (...args: any[]): void => l(console.info, '[info]', ...args)
const warn = (...args: any[]): void => l(console.warn, '[warn]', ...args)
const error = (...args: any[]): void => l(console.error, '[error]', ...args)

const envVar = (name: string): string => required(process.env[name], name)

const required = (val: any, name: string): any =>
  val || thrw(`${name} required`)

const thrw = (err: string | Error): never => {
  if (err instanceof Error) throw err
  throw new Error(err)
}

module.exports = {
  log,
  debug,
  info,
  warn,
  error,
  envVar,
  required,
  thrw
}
