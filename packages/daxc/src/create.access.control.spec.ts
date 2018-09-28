import { expect } from "chai";
import { createAccessControl } from "./create.access.control";

describe("#create.access.control.js tests", () => {
  describe("#createAccessControl()", () => {
    it("expect to create an instance of AccessControl", () => {
      // arranges

      // acts
      const instance = createAccessControl();

      // asserts
      expect(instance).not.to.be.undefined;
      expect(typeof instance.dispatch).to.equal("function");
      expect(typeof instance.getState).to.equal("function");
      expect(typeof instance.subscribe).to.equal("function");
    });
  });
});
