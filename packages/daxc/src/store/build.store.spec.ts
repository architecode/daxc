import { Store } from "redux";
import { expect } from "chai";
import { buildStore } from "./build.store";

describe("#build.store.js tests", () => {
  describe("#buildStore()", () => {
    it("expect to create a store", () => {
      // arranges

      // acts
      const store = buildStore();

      // asserts
      expect(store).not.to.be.undefined;
    });
  });
});
