import { expect } from "chai";
import { RolesPermissions } from "daxc-common";
import { RolesPermissionsReducer } from "./RolesPermissionsReducer";

describe("#RolesPermissionsReducer.ts tests", () => {
  describe("#RolesPermissionsReducer.reduce()", () => {
    describe("## positive", () => {
      const reinforcement = "positive";

      it("expect to get the undefined ", () => {
        // arranges
        const roles: RolesPermissions[] = [];
        const expected = undefined;

        // acts
        const result = RolesPermissionsReducer.reduce(roles, reinforcement);

        // asserts
        expect(result).to.equal(expected);
      });

      it("expect to get the undefined ", () => {
        // arranges
        const roles: RolesPermissions[] = ["Denied", "Allowed", "Neutral"];
        const expected = "Allowed";

        // acts
        const result = RolesPermissionsReducer.reduce(roles, reinforcement);

        // asserts
        expect(result).to.equal(expected);
      });
    });
  });
});
