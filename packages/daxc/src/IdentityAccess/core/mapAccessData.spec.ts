import { expect } from "chai";
import { IAccessPolicy } from "daxc-common";
import { mapAccessData } from "./mapAccessData";

describe("#mapAccessData.ts tests", () => {
  describe("#mapAccessData()", () => {
    it("expect to prepare a data without roles", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
          },
        },
        roles: {
        },
      };
      const roles: string[] = [];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [],
          },
          permissions: {},
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to prepare a data with permissions, but without roles", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
            permissions: {
              Update: "Neutral",
            },
          },
        },
        roles: {
        },
      };
      const roles: string[] = [];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [],
          },
          permissions: {
            Update: {
              initial: "Neutral",
              roles: [],
            },
          },
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to prepare a data with non-exist role", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
            permissions: {
              Update: "Neutral",
            },
          },
        },
        roles: {
        },
      };
      const roles: string[] = ["AccountsAdmin"];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [],
          },
          permissions: {
            Update: {
              initial: "Neutral",
              roles: [],
            },
          },
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to prepare a data with single role", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
            permissions: {
              Update: "Neutral",
            },
          },
        },
        roles: {
          AccountsAdmin: {
            resources: {
              UserAccounts: {},
            },
          },
        },
      };
      const roles: string[] = ["AccountsAdmin"];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [],
          },
          permissions: {
            Update: {
              initial: "Neutral",
              roles: [],
            },
          },
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to prepare a data with single role and permissions", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
            permissions: {
              Update: "Neutral",
            },
          },
        },
        roles: {
          AccountsAdmin: {
            resources: {
              UserAccounts: {
                accessible: true,
                permissions: {
                  Update: "Allowed",
                },
              },
            },
          },
        },
      };
      const roles: string[] = ["AccountsAdmin"];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [{
              role: "AccountsAdmin",
              value: true,
            }],
          },
          permissions: {
            Update: {
              initial: "Neutral",
              roles: [{
                role: "AccountsAdmin",
                value: "Allowed",
              }],
            },
          },
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to prepare a data with multiple roles", () => {
      // arranges
      const policy: IAccessPolicy = {
        resources: {
          UserAccounts: {
            accessible: false,
            permissions: {
              Update: "Neutral",
            },
          },
        },
        roles: {
          AccountsAdmin: {
            resources: {
              UserAccounts: {
                accessible: true,
                permissions: {
                  Update: "Allowed",
                },
              },
            },
          },
          Customers: {
            resources: {
              UserAccounts: {
                accessible: undefined,
                permissions: {
                  Update: "Denied",
                },
              },
            },
          },
          Cashier: {
            resources: {
              UserAccounts: {
                accessible: false,
                permissions: {
                },
              },
            },
          },
        },
      };
      const roles: string[] = ["AccountsAdmin", "Cashier", "Customers"];
      const expected = {
        UserAccounts: {
          accessible: {
            initial: false,
            roles: [{
              role: "AccountsAdmin",
              value: true,
            }, {
              role: "Cashier",
              value: false,
            }],
          },
          permissions: {
            Update: {
              initial: "Neutral",
              roles: [{
                role: "AccountsAdmin",
                value: "Allowed",
              }, {
                role: "Customers",
                value: "Denied",
              }],
            },
          },
        },
      };

      // acts
      const result = mapAccessData(policy, roles);

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});
