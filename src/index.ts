const TEST_ENV = process.env.ENVIRONMENT === 'test'

const l = (fn: any, first: any, ...rest: any[]) => {
  TEST_ENV ? null : first ? fn(first, ...rest) : fn(...rest)
}

export const log = (...args: any[]): void => l(console.log, null, ...args)
export const debug = (...args: any[]): void =>
  l(console.debug, '[debug]', ...args)
export const info = (...args: any[]): void => l(console.info, '[info]', ...args)
export const warn = (...args: any[]): void => l(console.warn, '[warn]', ...args)
export const error = (...args: any[]): void =>
  l(console.error, '[error]', ...args)

export const envVar = (name: string): string =>
  required(process.env[name], name)

export const required = (val: any, name: string): any =>
  val || thrw(`${name} required`)

export const thrw = (err: string | Error): never => {
  if (err instanceof Error) throw err
  throw new Error(err)
}
