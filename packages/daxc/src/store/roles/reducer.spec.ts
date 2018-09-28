import { expect } from "chai";
import { Actions } from "daxc-common";
import Reducer from "./reducer";

describe("#ROLES/reducer.js tests", () => {
  describe("#Reducer - CREATE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const action = Actions.Roles.create(role);
      const expected = {
        Admin: {
          resources: {}
        },
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const action = Actions.Roles.create(role);
      const initial = {
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
            },
          },
        },
      };
      const expected = {
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
            },
          },
        },
        Admin: {
          resources: {}
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });
  });

  describe("#Reducer - RESOURCE_ACCESSIBLE_MAKE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeAccessible(role, resource);
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
            },
          },
        },
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeAccessible(role, resource);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeAccessible(role, resource);
      const initial = {
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeAccessible(role, resource);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });
  });

  describe("#Reducer - RESOURCE_INACCESSIBLE_MAKE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeInaccessible(role, resource);
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
            },
          },
        },
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeInaccessible(role, resource);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeInaccessible(role, resource);
      const initial = {
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const action = Actions.Roles.makeInaccessible(role, resource);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });
  });

  describe("#Reducer - RESOURCE_PERMISSION_SET action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Roles.setPermission(role, resource, permission, value);
      const expected = {
        Admin: {
          resources: {
            Sales: {
              permissions: {
                [permission]: value,
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Roles.setPermission(role, resource, permission, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                [permission]: value,
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Roles.setPermission(role, resource, permission, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };
      const initial_permissions = initial.Admin.resources.Sales.permissions;
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                [permission]: value,
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.permissions).not.to.equal(initial_permissions);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Roles.setPermission(role, resource, permission, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Delete: "NONE",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };
      const initial_permissions = initial.Admin.resources.Sales.permissions;
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                [permission]: value,
                Delete: "NONE",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.permissions).not.to.equal(initial_permissions);
    });
  });

  describe("#Reducer - RESOURCE_PERMISSION_DELETE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Roles.deletePermission(role, resource, permission);
      const expected = {};

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Roles.deletePermission(role, resource, permission);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {},
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Roles.deletePermission(role, resource, permission);
      const initial = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
                Delete: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const initial_permissions = initial.Admin.resources.Sales.permissions;
      const expected = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Delete: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.permissions).not.to.equal(initial_permissions);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Roles.deletePermission(role, resource, permission);
      const initial = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Delete: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const initial_permissions = initial.Admin.resources.Sales.permissions;
      const expected = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Delete: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.permissions).not.to.equal(initial_permissions);
    });
  });

  describe("#Reducer - RESOURCE_SUBJECT_SET action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const value = "READ/WRITE";
      const action = Actions.Roles.setSubject(role, resource, subject, value);
      const expected = {
        Admin: {
          resources: {
            Sales: {
              subjects: {
                [subject]: value,
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const value = "READ/WRITE";
      const action = Actions.Roles.setSubject(role, resource, subject, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                [subject]: value,
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const value = "READ/WRITE";
      const action = Actions.Roles.setSubject(role, resource, subject, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };
      const initial_subjects = initial.Admin.resources.Sales.subjects;
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                [subject]: value,
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.subjects).not.to.equal(initial_subjects);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const value = "READ/WRITE";
      const action = Actions.Roles.setSubject(role, resource, subject, value);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Delete: "NONE",
              },
              subjects: {
                Name: "READ",
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };
      const initial_subjects = initial.Admin.resources.Sales.subjects;
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Delete: "NONE",
              },
              subjects: {
                Name: "READ",
                [subject]: value,
              },
            },
          },
        },
        Accountants: {
          resources: {
            Sales: {
              accessible: false,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.subjects).not.to.equal(initial_subjects);
    });
  });

  describe("#Reducer - RESOURCE_SUBJECT_DELETE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Roles.deleteSubject(role, resource, subject);
      const expected = {};

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Roles.deleteSubject(role, resource, subject);
      const initial = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const expected = {
        Admin: {
          resources: {
            Sales: {
              accessible: true,
              permissions: {
                Edit: "ALL",
              },
              subjects: {},
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Roles.deleteSubject(role, resource, subject);
      const initial = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Name: "READ",
                Price: "READ/WRITE",
              },
            },
          },
        },
      };
      const initial_subjects = initial.Admin.resources.Sales.subjects;
      const expected = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Edit: "NONE",
              },
              subjects: {
                Name: "READ",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.subjects).not.to.equal(initial_subjects);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Roles.deleteSubject(role, resource, subject);
      const initial = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Delete: "ALL",
              },
              subjects: {
                Name: "READ/WRITE",
              },
            },
          },
        },
      };
      const initial_subjects = initial.Admin.resources.Sales.subjects;
      const expected = {
        Admin: {
          resources: {
            Account: {
              accessible: false,
              permissions: {
                Edit: "NONE",
              },
            },
            Sales: {
              accessible: true,
              permissions: {
                Delete: "ALL",
              },
              subjects: {
                Name: "READ/WRITE",
              },
            },
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Admin).to.equal(initial.Admin);
      expect(result.Admin.resources.Sales.subjects).not.to.equal(initial_subjects);
    });
  });

  describe("#Reducer - OTHERS action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const action = { type: "Others" };
      const expected = {};

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const action = { type: "Others" };
      const initial = {
        Sales: { resources: {} },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.equal(initial);
    });
  });
});
