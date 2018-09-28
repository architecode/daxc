import { expect } from "chai";
import { IdentityAccessDTO } from "daxc-common";
import { composeIdentityAccess } from "./compose.identity.access";

describe("#compose.identity.access.js tests", () => {
  describe("#composeIdentityAccess()", () => {
    it("expect to compose an instance of IdentityAccess", () => {
      // arranges
      const dto: IdentityAccessDTO<any, any> = {
        identity: { name: "Test Identity" },
        access: {
          Products: {
            accessible: true,
            permissions: {},
            subjects: {},
          }
        }
      };

      // acts
      const iAccess = composeIdentityAccess(dto);

      // asserts
      expect(iAccess).not.to.be.undefined;
    });
  });
});
