import { expect } from "chai";
import { IdentityPermissions, RolesPermissions } from "daxc-common";
import { MappedAccess } from "./MappedAccess";
import { AccessReducer } from "./AccessReducer";

describe("#AccessReducer.ts tests", () => {
  describe("#AccessReducer.accessible()", () => {
    describe("## undefined initial", () => {
      describe("### zero roles", () => {
        it("expect to get a false accessible in undefined initial, zero roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, zero roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, zero roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });
      });

      describe("### single role", () => {
        it("expect to get a false accessible in undefined initial, undefined role, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: undefined,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative role, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, undefined role, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: undefined,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative role, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, undefined role, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: undefined,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative role, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });
      });

      describe("### some roles", () => {
        it("expect to get a false accessible in undefined initial, negative roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, mixed roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, mixed roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, mixed roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, mixed roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and undefined reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, mixed roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and positive reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, negative roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: false,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a false accessible in undefined initial, mixed roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: false,
                }],
              },
              permissions: {}
            },
          };
          const expected = false;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });

        it("expect to get a true accessible in undefined initial, positive roles, and negative reinforcement", () => {
          // arranges
          const mappedAccess: MappedAccess = {
            UserAccounts: {
              accessible: {
                initial: undefined,
                roles: [{
                  role: "sampleRole1",
                  value: true,
                }, {
                  role: "sampleRole2",
                  value: true,
                }],
              },
              permissions: {}
            },
          };
          const expected = true;

          // acts
          const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

          // asserts
          expect(result).to.equal(expected);
        });
      });
    });

    describe("## true initial", () => {
      // true initial | zero roles
      it("expect to get a true accessible in true initial, zero roles, and undefined reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: true,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = true;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

        // asserts
        expect(result).to.equal(expected);
      });

      it("expect to get a true accessible in true initial, zero roles, and positive reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: true,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = true;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

        // asserts
        expect(result).to.equal(expected);
      });

      it("expect to get a true accessible in true initial, zero roles, and negative reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: true,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = true;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

        // asserts
        expect(result).to.equal(expected);
      });
    });

    describe("## false initial", () => {
      // false initial | zero roles
      it("expect to get a false accessible in false initial, zero roles, and undefined reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: false,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = false;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", undefined);

        // asserts
        expect(result).to.equal(expected);
      });

      it("expect to get a false accessible in false initial, zero roles, and positive reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: false,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = false;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "positive");

        // asserts
        expect(result).to.equal(expected);
      });

      it("expect to get a false accessible in false initial, zero roles, and negative reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          UserAccounts: {
            accessible: {
              initial: false,
              roles: [],
            },
            permissions: {}
          },
        };
        const expected = false;

        // acts
        const result = AccessReducer.accessible(mappedAccess, "UserAccounts", "negative");

        // asserts
        expect(result).to.equal(expected);
      });
    });
  });

  describe("#AccessReducer.permissions()", () => {
    describe("## zero roles", () => {
      it("expect to get the permissions in zero roles, and undefined reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [],
              },
              Attributes: {
                initial: "Attributes",
                roles: [],
              },
              Owner: {
                initial: "Owner",
                roles: [],
              },
              Neutral: {
                initial: "Neutral",
                roles: [],
              },
              None: {
                initial: "None",
                roles: [],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions in zero roles, and positive reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [],
              },
              Attributes: {
                initial: "Attributes",
                roles: [],
              },
              Owner: {
                initial: "Owner",
                roles: [],
              },
              Neutral: {
                initial: "Neutral",
                roles: [],
              },
              None: {
                initial: "None",
                roles: [],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions in zero roles, and negative reinforcement", () => {
        // arranges
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [],
              },
              Attributes: {
                initial: "Attributes",
                roles: [],
              },
              Owner: {
                initial: "Owner",
                roles: [],
              },
              Neutral: {
                initial: "Neutral",
                roles: [],
              },
              None: {
                initial: "None",
                roles: [],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });
    });

    describe("## positive reinforcement", () => {
      it("expect to get the permissions from AbsoluteAllowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteAllowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: { [permission: string]: IdentityPermissions; } = {
          All: "Allowed",
          Attributes: "Allowed",
          Owner: "Allowed",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from AbsoluteDenied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteDenied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Denied",
          Owner: "Denied",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Allowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Allowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Denied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Denied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Neutral", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Neutral";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "positive");

        // asserts
        expect(result).to.deep.equal(expected);
      });
    });

    describe("## negative reinforcement", () => {
      it("expect to get the permissions from AbsoluteAllowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteAllowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: { [permission: string]: IdentityPermissions; } = {
          All: "Allowed",
          Attributes: "Allowed",
          Owner: "Allowed",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from AbsoluteDenied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteDenied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Denied",
          Owner: "Denied",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Allowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Allowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Denied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Denied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Neutral", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Neutral";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", "negative");

        // asserts
        expect(result).to.deep.equal(expected);
      });
    });

    describe("## undefined reinforcement", () => {
      it("expect to get the permissions from AbsoluteAllowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteAllowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: { [permission: string]: IdentityPermissions; } = {
          All: "Allowed",
          Attributes: "Allowed",
          Owner: "Allowed",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from AbsoluteDenied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "AbsoluteDenied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Denied",
          Owner: "Denied",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Allowed", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Allowed";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Allowed",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Denied", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Denied";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Denied",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Denied",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });

      it("expect to get the permissions from Neutral", () => {
        // arranges
        const rolesPermission: RolesPermissions = "Neutral";
        const mappedAccess: MappedAccess = {
          Resource: {
            accessible: {
              initial: undefined,
              roles: [],
            },
            permissions: {
              All: {
                initial: "All",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Attributes: {
                initial: "Attributes",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Owner: {
                initial: "Owner",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              Neutral: {
                initial: "Neutral",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
              None: {
                initial: "None",
                roles: [{
                  role: "R1",
                  value: rolesPermission,
                }],
              },
            },
          },
        };
        const expected: {
          [permission: string]: IdentityPermissions;
        } = {
          All: "Allowed",
          Attributes: "Attributes",
          Owner: "Owner",
          Neutral: "Allowed",
          None: "Denied",
        };

        // acts
        const result = AccessReducer.permissions(mappedAccess, "Resource", undefined);

        // asserts
        expect(result).to.deep.equal(expected);
      });
    });
  });
});
