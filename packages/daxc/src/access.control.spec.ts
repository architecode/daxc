import { expect } from "chai";
import { PERMISSIONS, SUBJECTS } from "daxc-common";
import { createAccessControl } from "./create.access.control";

describe("#access.control.js tests", () => {
  describe("#AccessControl.getState()", () => {
    it("expect to get an initial state, #1", () => {
      // arranges
      const instance = createAccessControl();
      const expected = {
        resources: {},
        roles: {},
      };

      // acts
      const state = instance.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });

    it("expect to get an initial state, #2", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: true,
          }
        },
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: false,
              },
            },
          },
        },
      };
      const instance = createAccessControl(initial);

      // acts
      const state = instance.getState();

      // asserts
      expect(state).to.equal(initial);
    });
  });

  describe("#AccessControl.Resources", () => {
    it("expect to manipulate Resources state, #1", () => {
      // arranges
      const instance = createAccessControl();
      const expected = {
        resources: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {},
      };

      // acts
      instance
        .Resources.create("Products")
        .Resources.accessible("Products", true)
        .Resources.setPermission("Products", "Edit", PERMISSIONS.All)
        .Resources.setPermission("Products", "View", PERMISSIONS.All)
        .Resources.setSubject("Products", "Name", SUBJECTS.Read_Write)
        .Resources.setSubject("Products", "Cost", SUBJECTS.Read_Write);
      const state = instance.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });

    it("expect to manipulate Resources state, #2", () => {
      // arranges
      const instance = createAccessControl();
      const expected = {
        resources: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "ALL",
            },
            subjects: {
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {},
      };

      // acts
      instance
        .Resources.create("Products")
        .Resources.accessible("Products", false)
        .Resources.setPermission("Products", "Edit", PERMISSIONS.All)
        .Resources.setPermission("Products", "View", PERMISSIONS.All)
        .Resources.setSubject("Products", "Name", SUBJECTS.Read_Write)
        .Resources.setSubject("Products", "Cost", SUBJECTS.Read_Write)
        .Resources.deletePermission("Products", "View")
        .Resources.deleteSubject("Products", "Name");
      const state = instance.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });

    it("expect to manipulate Resources state, #3", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Name: "READ/WRITE",
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        },
      };
      const instance = createAccessControl(initial);
      const expected = {
        Products: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            View: "ALL",
          },
          subjects: {
            Name: "READ/WRITE",
            Cost: "READ/WRITE",
          },
        }
      };

      // acts
      const state = instance.Resources.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });
  });

  describe("#AccessControl.Roles", () => {
    it("expect to manipulate Roles state, #1", () => {
      // arranges
      const instance = createAccessControl();
      const expected = {
        resources: {},
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Name: "READ/WRITE",
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        }
      };

      // acts
      instance
        .Roles.create("Admin")
        .Roles.accessibleResource("Admin", "Products", true)
        .Roles.setResourcePermission("Admin", "Products", "Edit", PERMISSIONS.All)
        .Roles.setResourcePermission("Admin", "Products", "View", PERMISSIONS.All)
        .Roles.setResourceSubject("Admin", "Products", "Name", SUBJECTS.Read_Write)
        .Roles.setResourceSubject("Admin", "Products", "Cost", SUBJECTS.Read_Write);
      const state = instance.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });

    it("expect to manipulate Roles state, #2", () => {
      // arranges
      const instance = createAccessControl();
      const expected = {
        resources: {},
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: false,
                permissions: {
                  Edit: "ALL",
                },
                subjects: {
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        }
      };

      // acts
      instance
        .Roles.create("Admin")
        .Roles.accessibleResource("Admin", "Products", false)
        .Roles.setResourcePermission("Admin", "Products", "Edit", PERMISSIONS.All)
        .Roles.setResourcePermission("Admin", "Products", "View", PERMISSIONS.All)
        .Roles.setResourceSubject("Admin", "Products", "Name", SUBJECTS.Read_Write)
        .Roles.setResourceSubject("Admin", "Products", "Cost", SUBJECTS.Read_Write)
        .Roles.deleteResourcePermission("Admin", "Products", "View")
        .Roles.deleteResourceSubject("Admin", "Products", "Name");
      const state = instance.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });

    it("expect to manipulate Roles state, #3", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Name: "READ/WRITE",
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        },
      };
      const instance = createAccessControl(initial);
      const expected = {
        Admin: {
          resources: {
            Products: {
              accessible: true,
              permissions: {
                Edit: "ALL",
                View: "ALL",
              },
              subjects: {
                Name: "READ/WRITE",
                Cost: "READ/WRITE",
              },
            }
          }
        }
      };

      // acts
      const state = instance.Roles.getState();

      // asserts
      expect(state).to.deep.equal(expected);
    });
  });

  describe("#AccessControl.toIdentityAccess()", () => {
    it("expect to resolve IdentityAccess, #1", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Name: "READ/WRITE",
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        },
      };
      const instance = createAccessControl(initial);
      const identity = {
        roles: ["Admin"]
      };
      const expected = {
        identity,
        access: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        }
      };

      // acts
      const iaccess = instance.toIdentityAccess(identity);

      // asserts
      expect(iaccess).to.deep.equal(expected);
    });

    it("expect to resolve IdentityAccess, #2", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        },
        roles: {
          Admin: {
            resources: {
              Products: {
                accessible: true,
                permissions: {
                  Edit: "ALL",
                  View: "ALL",
                },
                subjects: {
                  Name: "READ/WRITE",
                  Cost: "READ/WRITE",
                },
              }
            }
          }
        },
      };
      const instance = createAccessControl(initial);
      const identity = {};
      const toIdentity = () => ({
        roles: ["Admin"]
      });
      const expected = {
        identity: {
          roles: ["Admin"]
        },
        access: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {
              Name: "READ/WRITE",
              Cost: "READ/WRITE",
            },
          }
        }
      };

      // acts
      const iaccess = instance.toIdentityAccess(identity, toIdentity);

      // asserts
      expect(iaccess).to.deep.equal(expected);
    });

    it("expect to resolve IdentityAccess, #3", () => {
      // arranges
      const initial = {
        resources: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "ALL",
              Delete: "NONE"
            }
          }
        },
        roles: {}

      };
      const instance = createAccessControl(initial);
      const identity = {};
      const toIdentity = () => ({
        roles: ["Admin"]
      });
      const expected = {
        identity: {
          roles: ["Admin"]
        },
        access: {
          Products: {
            accessible: false,
            permissions: {
              Edit: "ALL",
              Delete: "NONE"
            },
            subjects: {},
          }
        }
      };

      // acts
      const iaccess = instance.toIdentityAccess(identity, toIdentity);

      // asserts
      expect(iaccess).to.deep.equal(expected);
    });

    it("expect to resolve IdentityAccess, #4", () => {
      // arranges
      const instance = createAccessControl();
      instance
        .Resources.accessible("Products", true)
        .Resources.setPermission("Products", "Edit", PERMISSIONS.None)
        .Resources.setPermission("Products", "View", PERMISSIONS.Owner)
        .Roles.setResourcePermission("Admin", "Products", "View", PERMISSIONS.All)
        .Roles.setResourcePermission("Admin", "Products", "Edit", PERMISSIONS.All);
      const identity = {};
      const toIdentity = () => ({
        roles: ["Admin"]
      });
      const expected = {
        identity: {
          roles: ["Admin"]
        },
        access: {
          Products: {
            accessible: true,
            permissions: {
              Edit: "ALL",
              View: "ALL",
            },
            subjects: {},
          }
        }
      };

      // acts
      const iaccess = instance.toIdentityAccess(identity, toIdentity);

      // asserts
      expect(iaccess).to.deep.equal(expected);
    });
  });
});
