# object-has-keys [![Build Status](https://travis-ci.org/nishanbajracharya/object-has-keys.svg?branch=master)](https://travis-ci.org/nishanbajracharya/object-has-keys)
A javascript utility to check if given object has a set of keys.

## Getting started
The first step is to add `object-has-keys` into your project.

```sh
$ npm install --save object-has-keys
```

## Usage
Import the package into your package using `require` or `import` statements
```js
const { hasKeys, hasAnyKey } = require('object-has-keys'); // CommonJS
```
```js
import { hasKeys, hasAnyKey } from 'object-has-keys'; // ES2015+
```

The `hasKeys` function takes two arguments, the `object` and the `keys`. It returns true if all the keys queried exist.

```js
const myObject = {
  key1: 'value',
  key2: 'value',
  key3: 'value'
};

hasKeys(myObject, 'key1'); // true
hasKeys(myObject, ['key1', 'key2']); // true

hasKeys(myObject, 'key5'); // false
hasKeys(myObject, ['key5']); // false
hasKeys(myObject, ['key1', 'key5']); // false
```

The `hasAnyKey` function takes two arguments, the `object` and the `keys`. It returns true if any key queried exists.

```js
const myObject = {
  key1: 'value',
  key2: 'value',
  key3: 'value'
};

hasAnyKey(myObject, 'key1'); // true
hasAnyKey(myObject, ['key1', 'key5']); // true

hasAnyKey(myObject, 'key5'); // false
hasAnyKey(myObject, ['key6']); // false
```

## Contributing
To contribute, follow one of the two options:

- **Open an Issue**

  Open an issue detailing:
  1. What the issue is
  2. Steps to reproduce
  3. Possible solutions

  Note: These details are recommended but are entirely optional.

- **Send a Pull Request**

  Fork this project and send a pull request to the `master` branch.

## License
MIT
