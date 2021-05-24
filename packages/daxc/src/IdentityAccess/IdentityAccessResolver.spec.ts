import { expect } from "chai";
import { IAccessPolicy, IIdentityBase } from "daxc-common";
import { IdentityAccessResolver } from "./IdentityAccessResolver";

describe("#IdentityAccessResolver.ts tests", () => {
  describe("#IdentityAccessResolver.resolve()", () => {
    it("expect to get an IdentityAccess with no identity", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "None",
              ListDB: "None",
              Query: "None",
              Command: "None",
            },
          },
        },
        roles: {},
      };
      const expected = {
        access: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "Denied",
              ListDB: "Denied",
              Query: "Denied",
              Command: "Denied",
            },
          },
        },
      };

      // acts
      const result = IdentityAccessResolver.resolve(policy);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to get an IdentityAccess with positive reinforcement", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "None",
              ListDB: "None",
              Query: "None",
              Command: "None",
            },
          },
        },
        roles: {},
        options: {
          reinforcement: "positive",
        },
      };
      const identity: IIdentityBase = {
        roles: [],
      };
      const expected = {
        access: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "Denied",
              ListDB: "Denied",
              Query: "Denied",
              Command: "Denied",
            },
          },
        },
      };

      // acts
      const result = IdentityAccessResolver.resolve(policy, identity);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to get an IdentityAccess with negative reinforcement", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "None",
              ListDB: "None",
              Query: "None",
              Command: "None",
            },
          },
        },
        roles: {},
        options: {
          reinforcement: "negative",
        },
      };
      const identity: IIdentityBase = {
        roles: [],
      };
      const expected = {
        access: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "Denied",
              ListDB: "Denied",
              Query: "Denied",
              Command: "Denied",
            },
          },
        },
      };

      // acts
      const result = IdentityAccessResolver.resolve(policy, identity);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to get an IdentityAccess with undefined reinforcement", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "None",
              ListDB: "None",
              Query: "None",
              Command: "None",
            },
          },
        },
        roles: {},
      };
      const identity: IIdentityBase = {
        roles: [],
      };
      const expected = {
        access: {
          Databases: {
            accessible: false,
            permissions: {
              AccessDB: "Denied",
              ListDB: "Denied",
              Query: "Denied",
              Command: "Denied",
            },
          },
        },
      };

      // acts
      const result = IdentityAccessResolver.resolve(policy, identity);

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});
