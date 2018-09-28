import { expect } from "chai";
import { ATTRIBUTE_OPTS, _matching } from "./attribute.opts";

describe("#attribute.opts.js tests", () => {
  describe("#_matching", () => {
    it("expect to match values", () => {
      // arranges

      // acts
      const result01 = _matching("val", "val");
      const result02 = _matching(["val"], "val");
      const result03 = _matching("val", ["val"]);
      const result04 = _matching(["val"], ["val"]);
      const result05 = _matching([true], [true]);
      const result06 = _matching([false], [false]);

      // asserts
      expect(result01).to.be.true;
      expect(result02).to.be.true;
      expect(result03).to.be.true;
      expect(result04).to.be.true;
      expect(result05).to.be.true;
      expect(result06).to.be.true;
    });

    it("expect not to match any empty array", () => {
      // arranges

      // acts
      const result01 = _matching([], []);
      const result02 = _matching([], ["val"]);
      const result03 = _matching(["val"], []);

      // asserts
      expect(result01).to.be.false;
      expect(result02).to.be.false;
      expect(result03).to.be.false;
    });

    it("expect not to match any undefined or array of undefined", () => {
      // arranges

      // acts
      const result01 = _matching(undefined, undefined);
      const result02 = _matching([undefined], [undefined]);
      const result03 = _matching(undefined, [undefined, "val"]);
      const result04 = _matching([undefined, "val"], undefined);
      const result05 = _matching([undefined, false], [undefined, false]);
      const result06 = _matching([undefined, false], [undefined, 0]);

      // asserts
      expect(result01).to.be.false;
      expect(result02).to.be.false;
      expect(result03).to.be.false;
      expect(result04).to.be.false;
      expect(result05).to.be.true;
      expect(result06).to.be.false;
    });
  });

  describe("#ATTRIBUTE_OPTS", () => {
    describe("ATTRIBUTE_OPTS.owner()", () => {
      it("expect to verify an owner, #1", () => {
        // arranges
        const accessOwner = "Test Owner";
        const identity = { accessOwner };
        const resource = { accessOwner };

        // acts
        const result = ATTRIBUTE_OPTS.owner(identity, resource);

        // asserts
        expect(result).to.be.true;
      });

      it("expect to verify an owner, #2", () => {
        // arranges
        const accessOwner = "Test Owner";
        const identity = { name: accessOwner };
        const resource = { accessOwner };

        // acts
        const result = ATTRIBUTE_OPTS.owner(identity, resource);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an owner, #3", () => {
        // arranges
        const accessOwner = "Test Owner";
        const identity = { accessOwner };
        const resource = { name: accessOwner };

        // acts
        const result = ATTRIBUTE_OPTS.owner(identity, resource);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an owner, #4", () => {
        // arranges
        const accessOwner = "Test Owner";
        const identity: any = undefined;
        const resource = { name: accessOwner };

        // acts
        const result = ATTRIBUTE_OPTS.owner(identity, resource);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an owner, #5", () => {
        // arranges
        const accessOwner = "Test Owner";
        const identity = { name: accessOwner };
        const resource: any = undefined;

        // acts
        const result = ATTRIBUTE_OPTS.owner(identity, resource);

        // asserts
        expect(result).to.be.false;
      });
    });

    describe("ATTRIBUTE_OPTS.attributes()", () => {
      it("expect to verify an attributes, #1", () => {
        // arranges
        const identity = { accessAttrs: ["1"] };
        const resource = { accessAttrs: ["0", "1", "2"] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(identity, resource);

        // asserts
        expect(result).to.be.true;
      });

      it("expect to verify an attributes, #2", () => {
        // arranges
        const identity: any = { accessAttrs: [] };
        const resource: any = { accessAttrs: [] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(identity, resource);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an attributes, #3", () => {
        // arranges
        const identity = { accessAttrs: ["1"] };
        const resource = { accessAttrs: ["0", "2"] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(identity, resource);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an attributes, #4", () => {
        // arranges
        const identity = { accessAttrs: ["1", "2"] };
        const resource = { accessAttrs: ["0", "2"] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(identity, resource);

        // asserts
        expect(result).to.be.true;
      });

      it("expect to verify an attributes, #5", () => {
        // arranges
        const identity = { accessAttrs: ["0", "1"] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(identity, undefined);

        // asserts
        expect(result).to.be.false;
      });

      it("expect to verify an attributes, #6", () => {
        // arranges
        const resource = { accessAttrs: ["0", "1"] };

        // acts
        const result = ATTRIBUTE_OPTS.attributes(undefined, resource);

        // asserts
        expect(result).to.be.false;
      });
    });
  });
});
