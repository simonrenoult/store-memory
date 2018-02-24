module.exports = store => {
  if (!Array.isArray(store)) throw new Error("store must be an array");
  return {
    add(data) {
      if (!data) throw new Error("data must be provided");
      store.push(data);
    },

    findAll() {
      return store;
    },

    find(id) {
      if (!id) throw new Error("id must be provided");
      return store.find(item => item.id === id);
    },

    removeAll() {
      store.splice(0, store.length);
    },

    remove(id) {
      if (!id) throw new Error("id must be provided");
      const indexOfItemToRemove = store.findIndex(item => item.id === id);
      if (indexOfItemToRemove === -1) return;
      store.splice(indexOfItemToRemove, 1);
    },

    update(id, data) {
      if (!id) throw new Error("id must be provided");
      if (!data) throw new Error("data must be provided");
      const indexOfItemToUpdate = store.findIndex(item => item.id === id);
      if (indexOfItemToUpdate === -1) return;
      store.splice(indexOfItemToUpdate, 1);
      store.push(Object.assign({ id }, data));
    }
  };
};
