# Utils

[![npm](https://img.shields.io/npm/v/@therockstorm/utils.svg)](https://www.npmjs.com/package/@therockstorm/utils)
[![Build Status](https://travis-ci.org/therockstorm/utils.svg)](https://travis-ci.org/therockstorm/utils)
[![license](https://img.shields.io/github/license/therockstorm/utils.svg)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/therockstorm/utils.svg)](https://greenkeeper.io/)

Common utility functions

## Installing

```shell
npm install @therockstorm/utils --save
```

## API Reference

* [`log`](#log)
* [`error`](#error)
* [`required`](#required)
* [`envVar`](#envVar)

### `log`

Calls `console.log` with `[INFO]` prefix except in test environment

```js
utils.log('My message');
```

### `error`

Calls `console.error` with `[ERROR]` prefix except in test environment

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
