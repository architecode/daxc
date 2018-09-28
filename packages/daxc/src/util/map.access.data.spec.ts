import { expect } from "chai";
import { mapAccessData } from "./map.access.data";

describe("#map.access.data.js tests", () => {
  describe("#mapAccessData()", () => {
    it("expect to map the AccessData, #1", () => {
      // arranges
      const roles = ["Accountants", "Users"];
      const state = {
        resources: {
          Products: {
            permissions: {
              Edit: "NONE",
              Delete: "NONE",
              List: "OWNER",
              View: "NONE",
            },
          }
        },
        roles: {
          Users: {
            resources: {
              Products: {
                permissions: {
                  View: "READ",
                },
              },
            },
          },
          Accountants: {
            resources: {
              Products: {
                permissions: {
                  Edit: "ALL",
                  List: "ALL",
                  View: "ALL",
                },
              }
            }
          }
        },
      };
      const expected: any = {
        roles: ["Accountants", "Users"],
        resources: {
          Products: {
            accessible: {
              initial: undefined,
              roles: []
            },
            permissions: {
              Edit: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "ALL" },
                ]
              },
              Delete: {
                initial: "NONE",
                roles: []
              },
              List: {
                initial: "OWNER",
                roles: [
                  { role: "Accountants", value: "ALL" },
                ]
              },
              View: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "ALL" },
                  { role: "Users", value: "READ" },
                ]
              },
            },
            subjects: {}
          },
        },
      };

      // acts
      const result = mapAccessData(roles, state);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to map the AccessData, #2", () => {
      // arranges
      const roles = ["Accountants", "Users"];
      const state = {
        resources: {
          Products: {
            accessible: false,
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
        roles: ["Accountants", "Users"],
        resources: {
          Products: {
            accessible: {
              initial: false,
              roles: [
                { role: "Accountants", value: true },
                { role: "Users", value: true },
              ]
            },
            permissions: {},
            subjects: {
              Title: {
                initial: "READ",
                roles: [
                  { role: "Accountants", value: "READ/WRITE" },
                ]
              },
              Price: {
                initial: "READ",
                roles: [
                  { role: "Accountants", value: "READ/WRITE" },
                ]
              },
              Cost: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "READ" },
                ]
              },
              Note: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "READ" },
                  { role: "Users", value: "READ" },
                ]
              },
            },
          },
        },
      };

      // acts
      const result = mapAccessData(roles, state);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to map the AccessData, #3", () => {
      // arranges
      const roles = ["Accountants", "Users"];
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
        roles: ["Accountants", "Users"],
        resources: {
          Products: {
            accessible: {
              initial: false,
              roles: [
                { role: "Accountants", value: true },
                { role: "Users", value: true },
              ]
            },
            permissions: {
              Edit: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "ALL" },
                ]
              },
              Delete: {
                initial: "NONE",
                roles: []
              },
              List: {
                initial: "OWNER",
                roles: [
                  { role: "Accountants", value: "ALL" },
                ]
              },
              View: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "ALL" },
                  { role: "Users", value: "READ" },
                ]
              },
            },
            subjects: {
              Title: {
                initial: "READ",
                roles: [
                  { role: "Accountants", value: "READ/WRITE" },
                ]
              },
              Price: {
                initial: "READ",
                roles: [
                  { role: "Accountants", value: "READ/WRITE" },
                ]
              },
              Cost: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "READ" },
                ]
              },
              Note: {
                initial: "NONE",
                roles: [
                  { role: "Accountants", value: "READ" },
                  { role: "Users", value: "READ" },
                ]
              },
            },
          },
        },
      };

      // acts
      const result = mapAccessData(roles, state);

      // asserts
      expect(result).to.deep.equal(expected);
    });
  });
});
