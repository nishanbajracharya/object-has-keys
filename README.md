# object-has-keys [![Build Status](https://travis-ci.org/nishanbajracharya/object-has-keys.svg?branch=master)](https://travis-ci.org/nishanbajracharya/object-has-keys)
A javascript utility to check if given object has a set of keys.

## Getting started
The first step is to add `redux-loader` into your project.

```sh
$ npm install --save object-has-keys
```

## Usage
Import the package into your package using `require` or `import` statements
```js
const hasKeys = require('object-has-keys'); // CommonJS
```
```js
import hasKeys from 'object-has-keys'; // ES2015+
```

The `hasKeys` function takes two arguments, the `object` and the `keys`. It can be use as follows:

```js
const myObject = {
  key: 'value'
};

hasKeys(myObject, 'key'); // true
hasKeys(myObject, ['key']); // true
hasKeys(myObject, 'key1'); // false
hasKeys(myObject, ['key2']); // false
```
