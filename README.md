# Utils

Common utils

## Installing

```shell
npm install @therockstorm/utils --save
```

## API Reference

* [`log`](#log)
* [`error`](#error)
* [`required`](#required)
* [`envVar`](#envVar)

## `log`

Calls `console.log` with `[INFO]` prefix except in test environment

```js
utils.log('My message');
```

## `error`

Calls `console.error` with `[ERROR]` prefix except in test environment

```js
utils.error('My message');
```

## `required`

Returns first argument or throws if undefined

```js
const value = utils.required(process.argv[1], 'myOption');
```

## `envVar`

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
