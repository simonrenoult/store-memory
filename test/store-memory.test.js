const memory = require("..");

describe("store", () => {
  test("throws an error when store is not an array", () => {
    expect(() => memory({})).toThrow("store must be an array");
  });

  describe("add", () => {
    describe("when data is missing", () => {
      test("throws an error", () => {
        const store = [];
        expect(memory(store).add).toThrow("data must be provided");
      });
    });

    describe("when data is provided", () => {
      test("adds the data to the store", () => {
        const store = [];
        memory(store).add("hello world");
        expect(store).toContain("hello world");
      });
    });
  });

  test("findAll", () => {
    const store = ["value1", "value2"];
    const items = memory(store).findAll();
    expect(items.length).toBe(2);
  });

  describe("find", () => {
    describe("when id is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(memory(store).find).toThrow("id must be provided");
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

  test("removeAll", () => {
    const store = ["value1", "value2"];
    memory(store).removeAll();
    expect(store.length).toBe(0);
  });

  describe("remove", () => {
    describe("when id is missing", () => {
      test("throws an error", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(memory(store).remove).toThrow("id must be provided");
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
        }).toThrow("id must be provided");
      });
    });

    describe("when id is provided", () => {
      test("updates the item", () => {
        const store = [{ id: 1, name: "mug" }, { id: 2, name: "ball" }];
        expect(() => {
          memory(store).update(1, undefined);
        }).toThrow("data must be provided");
      });
    });
  });
});
