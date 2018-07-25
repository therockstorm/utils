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

* [`log`](#log)
* [`debug`](#debug)
* [`info`](#info)
* [`warn`](#warn)
* [`error`](#error)
* [`required`](#required)
* [`envVar`](#envVar)

### `log`

Calls `console.log` except in test environment

```js
utils.log('My message');
```

### `debug`

Calls `console.debug` with `[debug]` prefix except in test environment

```js
utils.debug('My message');
```

### `info`

Calls `console.info` with `[info]` prefix except in test environment

```js
utils.info('My message');
```

### `warn`

Calls `console.warn` with `[warn]` prefix except in test environment

```js
utils.warn('My message');
```

### `error`

Calls `console.error` with `[error]` prefix except in test environment

```js
utils.error('My message');
```

### `required`

Returns first argument or throws if undefined

```js
const value = utils.required(process.argv[1], 'myOption');
```

### `envVar`

Returns first argument in `process.env` or throws if undefined

```js
const value = utils.envVar('MY_KEY');
```

## Developing

```shell
# Install dependencies
nvm install && nvm use && npm install

# Run tests, lint, and flow
npm test
```

## License

MIT © [Rocky Warren](https://www.rockywarren.com)
