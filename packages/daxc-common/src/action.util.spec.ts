import { expect } from "chai";
import { createAction } from "./action.util";

describe("#action.util.js tests", () => {
  describe("#createAction()", () => {
    it("expect to create an action", () => {
      // arranges
      const type = "ActionType";
      const expected = {
        type,
      };

      // acts
      const result = createAction(type);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to create an action with payload", () => {
      // arranges
      const type = "ActionType";
      const payload = { value: "value" };
      const expected = {
        type,
        payload,
      };

      // acts
      const result = createAction(type, payload);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to create an action with undefined payload", () => {
      // arranges
      const type = "ActionType";
      const payload: any = undefined;
      const expected = {
        type,
      };

      // acts
      const result = createAction(type, payload);

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});
