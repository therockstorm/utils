// @flow
const log = (
  msg: string,
  isError: boolean = false,
  isTest: boolean = process.env.ENVIRONMENT === 'test'
) => {
  if (isTest) return

  isError ? console.error('[ERROR]', msg) : console.log('[INFO]', msg)
}

const error = (msg: string) => log(msg, true)

const required = (val: mixed, name: string): any => {
  if (val) return val
  throw new Error(`${name} required`)
}

const envVar = (name: string): string => required(process.env[name], name)

module.exports = {
  log,
  error,
  envVar,
  required
}
