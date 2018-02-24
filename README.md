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
// Create a new store.
const store = []
const memoryStore = require('store-memory')
const productStore = memoryStore(store);

// Add a new product to the store.
const product = {id: 1, name: "mug"}
productStore.add(product);

// Find all products in the store.
const products = productStore.findAll();

// Find a product by id.
const product = productStore.find(1);

// Remove all products.
productStore.removeAll();

// Remove a product by id.
productStore.remove(1);

// Update a product.
productStore.update(1, {name: "tshirt"});

// Handle a product that does not exist.
try {
  productStore.find(42);
  productStore.remove(42);
  productStore.update(42, {});
} catch(e) {
  if (e instance memoryStore.NotFoundError) {
    // Do something.
  }
}

// Handle an invalid id.
try {
  productStore.find(null);
  productStore.remove(null);
  productStore.update(null);
} catch(e) {
  if (e instance ReferenceError) {
    // Do something.
  }
}

// Handle invalid data.
try {
  productStore.add(null);
  productStore.update(1, null);
} catch(e) {
  if (e instance ReferenceError) {
    // Do something.
  }
}
```

## License

MIT
