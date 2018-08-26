# Utils

[![npm](https://img.shields.io/npm/v/@therockstorm/utils.svg)](https://www.npmjs.com/package/@therockstorm/utils)
[![Build Status](https://travis-ci.org/therockstorm/utils.svg)](https://travis-ci.org/therockstorm/utils)
[![license](https://img.shields.io/github/license/therockstorm/utils.svg)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/therockstorm/utils.svg)](https://greenkeeper.io/)

Common utility functions

## Installing

```shell
npm install @therockstorm/utils --save
```

## API Reference

- [`log`](#log)
- [`debug`](#debug)
- [`info`](#info)
- [`warn`](#warn)
- [`error`](#error)
- [`envVar`](#envvar)
- [`once`](#once)
- [`required`](#required)
- [`thrw`](#thrw)

### `log`

Calls `console.log`

```js
utils.log('My message')
```

### `debug`

Calls `console.debug` with `[debug]` prefix

```js
utils.debug('My message')
```

### `info`

Calls `console.info` with `[info]` prefix

```js
utils.info('My message')
```

### `warn`

Calls `console.warn` with `[warn]` prefix

```js
utils.warn('My message')
```

### `error`

Calls `console.error` with `[error]` prefix

```js
utils.error('My message')
```

### `once`

Returns function that only executes once, no matter how many times it's called

```js
const onlyOnce = utils.once(() => console.log('hi'))

onlyOnce() // 'hi'
onlyOnce() // nothing
```

### `envVar`

Returns argument from `process.env` or throws if undefined

```js
const value = utils.envVar('MY_KEY')
```

### `required`

Returns first argument or throws using second argument as error message if undefined

```js
const value = utils.required(process.argv[1], 'myOption')
```

### `thrw`

Throws an exception, can be used in locations `throw` cannot

```js
myVal ? doSomething() : thrw('error')
```

## Developing

```shell
# Install dependencies
nvm install && nvm use && npm install

# Run tests
npm test
```

## License

MIT © [Rocky Warren](https://www.rockywarren.com)
