import { expect } from "chai";
import { ACCESS_DATA_REDUCER } from "../access.data.reducer";
import { toIdentityAccess } from "./to.identity.access";

describe("#to.identity.access.js tests", () => {
  describe("#toIdentityAccess()", () => {
    it("expect to resolve the IdentityAccess, #1", () => {
      // arranges
      const identity = { roles: ["Accountants", "Users"] };
      const state = {
        resources: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "NONE",
              Delete: "NONE",
              List: "OWNER",
              View: "NONE",
            },
            subjects: {
              Title: "READ",
              Price: "READ",
              Cost: "NONE",
              Note: "NONE",
            },
          }
        },
        roles: {
          Users: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  View: "READ",
                },
                subjects: {
                  Note: "READ",
                },
              },
            },
          },
          Accountants: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  List: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Title: "READ/WRITE",
                  Price: "READ/WRITE",
                  Cost: "READ",
                  Note: "READ",
                },
              }
            }
          }
        },
      };
      const expected: any = {
        identity,
        access: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              Delete: "NONE",
              List: "ALL",
              View: "ALL",
            },
            subjects: {
              Title: "READ/WRITE",
              Price: "READ/WRITE",
              Cost: "READ",
              Note: "READ",
            },
          },
        },
      };

      // acts
      const result = toIdentityAccess(identity, (v) => v.roles, state, ACCESS_DATA_REDUCER);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to resolve the IdentityAccess, #2", () => {
      // arranges
      const identity = { roles: ["Accountants", "Users"] };
      const state = {
        resources: {
          Products: {
            permissions: {
              Edit: "NONE",
            },
          }
        },
        roles: {
          Users: {
            resources: {
              Products: {
                permissions: {
                  Edit: "OWNER",
                },
              },
            },
          },
          Accountants: {
            resources: {
              Products: {
                permissions: {
                  Edit: "ALL",
                }
              }
            }
          }
        },
      };
      const expected: any = {
        identity,
        access: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "ALL",
            },
            subjects: {},
          },
        },
      };

      // acts
      const result = toIdentityAccess(identity, (v) => v.roles, state, ACCESS_DATA_REDUCER);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to resolve the IdentityAccess, #3 [with Custom mapIdentityRoles]", () => {
      // arranges
      const identity = { accessAttrs: { Accountants: ["test"], Users: ["test"] } };
      const mapIdentityRoles: (v: any) => string[] = (identity) => Object.keys(identity.accessAttrs);
      const state = {
        resources: {
          Products: {
            permissions: {
              Edit: "NONE",
            },
          }
        },
        roles: {
          Users: {
            resources: {
              Products: {
                permissions: {
                  Edit: "OWNER",
                },
              },
            },
          },
          Accountants: {
            resources: {
              Products: {
                permissions: {
                  Edit: "ALL",
                }
              }
            }
          }
        },
      };
      const expected: any = {
        identity,
        access: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "ALL",
            },
            subjects: {},
          },
        },
      };

      // acts
      const result = toIdentityAccess(identity, mapIdentityRoles, state, ACCESS_DATA_REDUCER);

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});
