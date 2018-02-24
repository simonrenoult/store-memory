const shortid = require("shortid");

class NotFoundError extends Error {}

module.exports = store => {
  if (!Array.isArray(store)) throw new ReferenceError("store must be an array");
  return {
    NotFoundError,

    add(data) {
      if (!data) throw new ReferenceError("data must be provided");
      const id = shortid.generate();
      store.push(Object.assign({}, data, { id }));
      return id;
    },

    findAll() {
      return store;
    },

    count() {
      return store.length;
    },

    find(id) {
      if (!id) throw new ReferenceError("id must be provided");
      const item = store.find(item => item.id === id);
      if (!item) throw new NotFoundError();
      return item;
    },

    removeAll() {
      store.splice(0, store.length);
    },

    remove(id) {
      if (!id) throw new ReferenceError("id must be provided");
      const indexOfItemToRemove = store.findIndex(item => item.id === id);
      if (indexOfItemToRemove === -1) throw new NotFoundError();
      store.splice(indexOfItemToRemove, 1);
    },

    update(id, data) {
      if (!id) throw new ReferenceError("id must be provided");
      if (!data) throw new ReferenceError("data must be provided");
      const indexOfItemToUpdate = store.findIndex(item => item.id === id);
      if (indexOfItemToUpdate === -1) throw new NotFoundError();
      store.splice(indexOfItemToUpdate, 1);
      store.push(Object.assign({ id }, data));
    }
  };
};
