# store-memory

> Simplified memory store.

<a href="https://travis-ci.org/simonrenoult/store-memory">
  <img alt="Travis" src="https://img.shields.io/travis/simonrenoult/store-memory.svg?style=flat-square">
</a>
<a href="https://codecov.io/gh/simonrenoult/store-memory">
  <img alt="Codecov" src="https://img.shields.io/codecov/c/github/simonrenoult/store-memory.svg?style=flat-square">
</a>
<a href="https://travis-ci.org/simonrenoult/store-memory">
  <img alt="Travis" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

## Install

```
$ npm install store-memory
```

## Usage

```js
const store = require('store-memory')([]);

store.add({id: 1, name: "Tom"});
const items = store.findAll();
```

## License

MIT
