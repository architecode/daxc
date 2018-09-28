import { expect } from "chai";
import * as sinon from "sinon";
import { MAP_IDENTITY_ATTRIBUTES } from "../map.identity.attributes";
import { IdentityAttributesMapper } from "./identity.attributes.mapper";

describe("#identity.attributes.mapper.js tests", () => {
  describe("IdentityAttributesMapper(), using MAP_IDENTITY_ATTRIBUTES", () => {
    it("expect to map identity with attributes, #1", () => {
      // arranges
      const identity = {
        name: "Sample Test",
      };

      // acts
      const result = IdentityAttributesMapper(identity);

      // asserts
      expect(result).not.to.equal(identity);
      expect(result).to.deep.equal(identity);
    });

    it("expect to map identity with attributes, #2", () => {
      // arranges
      const identity = {
        name: "Sample Test",
        accessAttrs: ["test.01", "test.02"]
      };

      // acts
      const result = IdentityAttributesMapper(identity);

      // asserts
      expect(result).not.to.equal(identity);
      expect(result).to.deep.equal(identity);
    });

    it("expect to map identity with attributes, #3", () => {
      // arranges
      const identity = {
        name: "Sample Test",
        accessAttrs: {
          Resource: ["test.01", "test.02"]
        }
      };
      const expected = {
        name: "Sample Test",
        accessAttrs: ["test.01", "test.02"]
      };

      // acts
      const result = IdentityAttributesMapper(identity, "Resource");

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to map identity with attributes, #4", () => {
      // arranges
      const identity = {
        name: "Sample Test",
        accessAttrsObj: {
          Resource: ["test.01", "test.02"]
        }
      };
      const expected = {
        name: "Sample Test",
        accessAttrs: {
          Resource: ["test.01", "test.02"]
        }
      };

      // acts
      const result = IdentityAttributesMapper(identity, "Resource");

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });

  describe("IdentityAttributesMapper(), using custom MapIdentityAttributes", () => {
    const customMap = sinon.stub().callsFake((identity: any, resource: string) => ({
      type: "custom",
      resource,
    }));

    it("expect to map identity with attributes", () => {
      // arranges
      const identity = {
        name: "Sample Test",
      };
      const resource = "Resource Test";
      const expected: any = {
        name: "Sample Test",
        type: "custom",
        resource
      };

      // acts
      const result = IdentityAttributesMapper(identity, resource, customMap);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(customMap.calledOnce).to.be.true;
      expect(customMap.calledOnceWithExactly(identity, resource)).to.be.true;
    });
  });
});
