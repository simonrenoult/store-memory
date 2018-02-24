const memory = require("..");

describe("store", () => {
  test("throws an error when store is not an array", () => {
    expect(() => memory({})).toThrow(ReferenceError);
  });

  describe("add", () => {
    describe("when data is missing", () => {
      test("throws an error", () => {
        const store = [];
        expect(memory(store).add).toThrow(ReferenceError);
      });
    });

    describe("when data is provided", () => {
      test("adds the data to the store", () => {
        const store = [];
        memory(store).add({ id: 1, name: "mug" });
        expect(store.length).toBe(1);
      });

      test("it overrides the provided id", () => {
        const store = [];
        memory(store).add({ id: 1, name: "mug" });
        expect(store[0].id).not.toEqual(1);
      })

      test("returns the item id", () => {
        const store = [];
        const id = memory(store).add({ id: 1, name: "mug" });
        expect(id).toBeDefined();
      });
    });
  });

  describe("findAll", () => {
    test("returns all the items", () => {
      const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
      const items = memory(store).findAll();
      expect(items.length).toBe(2);
    });
  });

  describe("find", () => {
    describe("when id is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(memory(store).find).toThrow(ReferenceError);
      });
    });

    describe("when id does not exist", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => memory(store).find(3)).toThrow(memory.NotFoundError);
      });
    });

    describe("when id is provided", () => {
      test("returns the item", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        const item = memory(store).find(2);
        expect(item).toEqual({ id: 2, name: "ball" });
      });
    });
  });

  describe("removeAll", () => {
    test("removes all the items", () => {
      const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
      memory(store).removeAll();
      expect(store.length).toBe(0);
    });
  });

  describe("remove", () => {
    describe("when id is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(memory(store).remove).toThrow(memory.NotFoundError);
      });
    });

    describe("when id does not exist", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => memory(store).remove(3)).toThrow(memory.NotFoundError);
      });
    });

    describe("when id is provided", () => {
      test("removes the item from the store", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        memory(store).remove(2);
        expect(store.length).toBe(1);
      });
    });
  });

  describe("update", () => {
    describe("when id is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => {
          memory(store).update(undefined, {});
        }).toThrow(memory.NotFoundError);
      });
    });

    describe("when data is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => {
          memory(store).update(1, undefined);
        }).toThrow(memory.NotFoundError);
      });
    });

    describe("when id does not exist", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => {
          memory(store).update(3, { name: "tshirt" });
        }).toThrow(memory.NotFoundError);
      });
    });

    describe("when id and data are provided", () => {
      test("updates the item", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        memory(store).update(1, { name: "tshirt" });
        expect(store.find(e => e.id === 1)).toEqual({ id: 1, name: "tshirt" });
      });
    });
  });
});
