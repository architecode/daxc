import { expect } from "chai";
import * as sinon from "sinon";
import { MAP_IDENTITY_ATTRIBUTES } from "./map.identity.attributes";

describe("#map.identity.attributes.js tests", () => {
  describe("#mapIdentityAttributes()", () => {
    it("expect to map identity attributes, #1", () => {
      // arranges
      const identity = {
        name: "Test Identity"
      };

      // acts
      const result = MAP_IDENTITY_ATTRIBUTES(identity);

      // asserts
      expect(result).to.deep.equal({});
    });

    it("expect to map identity attributes, #2", () => {
      // arranges
      const identity = {
        name: "Test Identity",
        accessAttrs: ["test.01", "test.02"]
      };
      const expected = {
        accessAttrs: ["test.01", "test.02"]
      };

      // acts
      const result = MAP_IDENTITY_ATTRIBUTES(identity);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to map identity attributes with access attributes resources", () => {
      // arranges
      const identity = {
        name: "Test Identity",
        accessAttrs: {
          Test: ["test.01", "test.02"]
        }
      };
      const expected = {
        accessAttrs: ["test.01", "test.02"],
      };

      // acts
      const result = MAP_IDENTITY_ATTRIBUTES(identity, "Test");

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to map identity attributes with access attributes object", () => {
      // arranges
      const identity = {
        name: "Test Identity",
        accessAttrsObj: {
          Test: ["test.01", "test.02"]
        }
      };
      const expected = {
        accessAttrs: {
          Test: ["test.01", "test.02"]
        },
      };

      // acts
      const result = MAP_IDENTITY_ATTRIBUTES(identity, "Test");

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});