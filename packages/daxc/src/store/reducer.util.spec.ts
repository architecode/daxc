import { expect } from "chai";
import { createReducer, DirectReducer } from "./reducer.util";

describe("#reducer.util.js tests", () => {
  describe("#createReducer()", () => {
    const H1 = () => { };
    const H2 = () => { };
    const H3 = () => { };
    const handlers = { H1, H2, H3 };

    it("expect to create a reducer", () => {
      // arranges

      // acts
      const R1 = createReducer({ type: "H1" }, handlers);
      const R2 = createReducer({ type: "H2" }, handlers);
      const R3 = createReducer({ type: "H3" }, handlers);

      // asserts
      expect(R1).to.equal(H1);
      expect(R2).to.equal(H2);
      expect(R3).to.equal(H3);
    });

    it("expect to get the DirectReducer if the type of action not match", () => {
      // arranges

      // acts
      const result = createReducer({ type: "H4" }, handlers);

      // asserts
      expect(result).to.equal(DirectReducer);
    });
  });
});
