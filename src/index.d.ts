export function log(message?: any, ...optionalParams: any[]): void
export function debug(message?: any, ...optionalParams: any[]): void
export function info(message?: any, ...optionalParams: any[]): void
export function warn(message?: any, ...optionalParams: any[]): void
export function error(message?: any, ...optionalParams: any[]): void

export function envVar(name: string): string

export function once(fn: any, context: any): any

export function required(val: any, name: string): any

export function thrw(err: string | Error): never
