import { expect } from "chai";
import { IdentityAccessDTO, PERMISSIONS, SUBJECTS } from "daxc-common";
import { composeIdentityAccess } from "./compose.identity.access";

const dto: IdentityAccessDTO<PERMISSIONS, SUBJECTS> = {
  identity: { accessOwner: "Test Identity", accessAttrs: ["1", "2"] },
  access: {
    Test: {
      accessible: true,
      permissions: {
        All: PERMISSIONS.All,
        Attribute: PERMISSIONS.Attribute,
        Owner: PERMISSIONS.Owner,
        None: PERMISSIONS.None,
      },
      subjects: {
        RW: SUBJECTS.Read_Write,
        AA: SUBJECTS.ReadAttribute_WriteAttribute,
        OO: SUBJECTS.ReadOwner_WriteOwner,
        AN: SUBJECTS.ReadAttributeOnly,
        ON: SUBJECTS.ReadOwnerOnly,
        R: SUBJECTS.ReadOnly,
        N: SUBJECTS.None,
      },
    }
  }
};

const iAccess = composeIdentityAccess(dto);

describe("#identity.access.js tests", () => {
  describe("#IdentityAccess", () => {
    describe("IdentityAccess.getIdentity()", () => {
      it("expect to get an identity", () => {
        // arranges

        // acts
        const identity = iAccess.getIdentity();

        // asserts
        expect(identity).to.equal(dto.identity);
      });
    });

    describe("IdentityAccess.toDTO()", () => {
      it("expect to get a data transfer object", () => {
        // arranges

        // acts
        const result = iAccess.toDTO();

        // asserts
        expect(result).to.equal(dto);
      });
    });

    describe("IdentityAccess.access()", () => {
      it("expect to get an access, #1", () => {
        // arranges
        const resource = { name: "Test" };
        const expected = {
          accessible: true,
          permissions: {
            All: true,
            Attribute: false,
            Owner: false,
            None: false,
          },
          subjects: {
            RW: { read: true, write: true },
            AA: { read: false, write: false },
            OO: { read: false, write: false },
            AN: { read: false, write: false },
            ON: { read: false, write: false },
            R: { read: true, write: false },
            N: { read: false, write: false },
          },
        };

        // acts
        const result = iAccess.access(resource);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get an access, #2", () => {
        // arranges
        const resource = { name: "Test", accessOwner: "Test Identity" };
        const expected = {
          accessible: true,
          permissions: {
            All: true,
            Attribute: false,
            Owner: true,
            None: false,
          },
          subjects: {
            RW: { read: true, write: true },
            AA: { read: false, write: false },
            OO: { read: true, write: true },
            AN: { read: false, write: false },
            ON: { read: true, write: false },
            R: { read: true, write: false },
            N: { read: false, write: false },
          },
        };

        // acts
        const result = iAccess.access(resource);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get an access, #3", () => {
        // arranges
        const resource = {};
        const toResource = () => ({ name: "Test", accessOwner: "Test Identity", accessAttrs: ["2"] });
        const expected = {
          accessible: true,
          permissions: {
            All: true,
            Attribute: true,
            Owner: true,
            None: false,
          },
          subjects: {
            RW: { read: true, write: true },
            AA: { read: true, write: true },
            OO: { read: true, write: true },
            AN: { read: true, write: false },
            ON: { read: true, write: false },
            R: { read: true, write: false },
            N: { read: false, write: false },
          },
        };

        // acts
        const result = iAccess.access(resource, undefined, toResource);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get an access, #4", () => {
        // arranges
        const resource = { name: "Missed", accessOwner: "Test Identity", accessAttrs: ["2"] };
        const expected: any = {
          accessible: undefined,
          permissions: {},
          subjects: {},
        };

        // acts
        const result = iAccess.access(resource);

        // asserts
        expect(result).to.deep.equal(expected);
      });
    });
  });
});
