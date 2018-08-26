const handler = prefix => (target, _, args) =>
  !args || !prefix
    ? target(...args)
    : target(`[${prefix}]`, args.shift(), ...args)

const pConsole = { log: {}, debug: {}, info: {}, warn: {}, error: {} }
pConsole.log = new Proxy(console.log, { apply: handler('') })
const ms = ['debug', 'info', 'warn', 'error']
ms.forEach(m => (pConsole[m] = new Proxy(console[m], { apply: handler(m) })))

const envVar = (name: string): string => required(process.env[name], name)

const once = (fn: any, context: any): any => {
  let result
  return () => {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

const required = (val: any, name: string): any =>
  val || thrw(`${name} required`)

const thrw = (err: string | Error): never => {
  if (err instanceof Error) throw err
  throw new Error(err)
}

module.exports = {
  log: pConsole.log,
  debug: pConsole.debug,
  info: pConsole.info,
  warn: pConsole.warn,
  error: pConsole.error,
  envVar,
  once,
  required,
  thrw
}
