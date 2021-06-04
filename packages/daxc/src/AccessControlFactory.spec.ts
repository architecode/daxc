import { expect } from "chai";
import { IAccessPolicyLoader } from "daxc-common";
import { AccessControlFactory } from "./AccessControlFactory";

describe("#AccessControlFactory.ts tests", () => {
  describe("#IdentityAccess", () => {
    describe("[Permission] - IdentityAccess", () => {
      it("", () => {
        // arranges
        const loader: IAccessPolicyLoader = {
          load: async () => ({
            resources: {
              DataStores: {
                permissions: {
                  List: "All",
                },
              },
            },
            roles: {
            },
          }),
        };
        const instance = AccessControlFactory.create(loader);
        const expected = {
          access: {
            DataStores: {
              permissions: {
                List: true,
              },
            },
          },
        };

        // acts
        const access = instance.toIdentityAccess({});

        // asserts
        expect(access).to.deep.equal(expected);
      });
    });
  });
});
