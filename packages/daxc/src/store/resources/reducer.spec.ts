import { expect } from "chai";
import { Actions } from "daxc-common";
import Reducer from "./reducer";

describe("#RESOURCES/reducer.js tests", () => {
  describe("#Reducer - CREATE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const action = Actions.Resources.create(resource);
      const expected = {
        Sales: {}
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const resource = "Sales";
      const objVal = {
        accessible: true,
        permissions: {
          Delete: "ALL"
        }
      };
      const action = Actions.Resources.create(resource, objVal);
      const expected = {
        Sales: objVal,
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const resource = "Sales";
      const objVal = {
        accessible: true,
        permissions: {
          Delete: "ALL"
        }
      };
      const action = Actions.Resources.create(resource, objVal);
      /*
        action = {
          type: "resouces/CREATE",
          payload: {
            resource: "Sales",
            objVal: {
               accessible: true,
               permissions: {
                 Delete: "ALL"
               }
            }
          }
        }
      */
      const initial = {
        Accounts: { accessible: false, },
      };
      const expected = {
        Accounts: { accessible: false, },
        Sales: {
          accessible: true,
          permissions: {
            Delete: "ALL"
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
      const resource = "Sales";
      const objVal = {
        accessible: true,
        permissions: {
          Delete: "ALL"
        }
      };
      const action = Actions.Resources.create(resource, objVal);
      const initial = {
        Sales: { accessible: false, },
      };
      const expected = {
        Sales: objVal,
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
    });
  });

  describe("#Reducer - ACCESSIBLE_MAKE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const action = Actions.Resources.makeAccessible(resource);
      const expected = {
        Sales: {
          accessible: true,
        }
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const resource = "Sales";
      const action = Actions.Resources.makeAccessible(resource);
      const initial = {
        Sales: {
          accessible: false,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const action = Actions.Resources.makeAccessible(resource);
      const initial = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: false,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const action = Actions.Resources.makeAccessible(resource);
      const initial = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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

  describe("#Reducer - INACCESSIBLE_MAKE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const action = Actions.Resources.makeInaccessible(resource);
      const expected = {
        Sales: {
          accessible: false,
        }
      };

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const resource = "Sales";
      const action = Actions.Resources.makeInaccessible(resource);
      const initial = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: false,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const action = Actions.Resources.makeInaccessible(resource);
      const initial = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: false,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const action = Actions.Resources.makeInaccessible(resource);
      const initial = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ",
          },
        },
        Sales: {
          accessible: false,
          permissions: {
            Edit: "ALL",
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
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

  describe("#Reducer - PERMISSION_SET action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Resources.setPermission(resource, permission, value);
      const expected = {
        Sales: {
          permissions: {
            [permission]: value,
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
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Resources.setPermission(resource, permission, value);
      const initial = {
        Sales: {
          accessible: true,
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: true,
          permissions: {
            [permission]: value,
          },
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Resources.setPermission(resource, permission, value);
      const initial = {
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
            Price: "READ/WRITE",
          },
        },
      };
      const initial_permissions = initial.Sales.permissions;
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            [permission]: value,
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.permissions).not.to.equal(initial_permissions);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const action = Actions.Resources.setPermission(resource, permission, value);
      const initial = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Delete: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const initial_permissions = initial.Sales.permissions;
      const expected = {
        Account: {
          accessible: false,
          permissions: {
            Edit: "NONE",
          },
        },
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
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.permissions).not.to.equal(initial_permissions);
    });
  });

  describe("#Reducer - PERMISSION_DELETE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Resources.deletePermission(resource, permission);
      const expected = {};

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Resources.deletePermission(resource, permission);
      const initial = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: true,
          permissions: {},
          subjects: {
            Price: "READ/WRITE",
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
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Resources.deletePermission(resource, permission);
      const initial = {
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
      };
      const initial_permissions = initial.Sales.permissions;
      const expected = {
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
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.permissions).not.to.equal(initial_permissions);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const action = Actions.Resources.deletePermission(resource, permission);
      const initial = {
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
      };
      const initial_permissions = initial.Sales.permissions;
      const expected = {
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
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.permissions).not.to.equal(initial_permissions);
    });
  });

  describe("#Reducer - SUBJECT_SET action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const subject = "Price";
      const value = "READ";
      const action = Actions.Resources.setSubject(resource, subject, value);
      const expected = {
        Sales: {
          subjects: {
            [subject]: value,
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
      const resource = "Sales";
      const subject = "Price";
      const value = "READ";
      const action = Actions.Resources.setSubject(resource, subject, value);
      const initial = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
          },
          subjects: {
            [subject]: value,
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
      const resource = "Sales";
      const subject = "Price";
      const value = "READ";
      const action = Actions.Resources.setSubject(resource, subject, value);
      const initial = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ/WRITE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const initial_subjects = initial.Sales.subjects;
      const expected = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ/WRITE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            [subject]: value,
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.subjects).not.to.equal(initial_subjects);
    });

    it("expect to reduce an action, #4", () => {
      // arranges
      const resource = "Sales";
      const subject = "Price";
      const value = "READ";
      const action = Actions.Resources.setSubject(resource, subject, value);
      const initial = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ/WRITE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Name: "READ/WRITE",
          },
        },
      };
      const initial_subjects = initial.Sales.subjects;
      const expected = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ/WRITE",
          },
        },
        Sales: {
          accessible: true,
          permissions: {
            Edit: "NONE",
          },
          subjects: {
            Name: "READ/WRITE",
            [subject]: value,
          },
        },
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.subjects).not.to.equal(initial_subjects);
    });
  });

  describe("#Reducer - SUBJECT_DELETE action", () => {
    it("expect to reduce an action, #1", () => {
      // arranges
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Resources.deleteSubject(resource, subject);
      const expected = {};

      // acts
      const result = Reducer(undefined, action);

      // asserts
      expect(result).to.deep.equal(expected);
    });

    it("expect to reduce an action, #2", () => {
      // arranges
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Resources.deleteSubject(resource, subject);
      const initial = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
          },
          subjects: {
            Price: "READ/WRITE",
          },
        },
      };
      const expected = {
        Sales: {
          accessible: true,
          permissions: {
            Edit: "ALL",
          },
          subjects: {},
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
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Resources.deleteSubject(resource, subject);
      const initial = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ",
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
      };
      const initial_subjects = initial.Sales.subjects;
      const expected = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ",
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
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.subjects).not.to.equal(initial_subjects);
    });

    it("expect to reduce an action, #3", () => {
      // arranges
      const resource = "Sales";
      const subject = "Price";
      const action = Actions.Resources.deleteSubject(resource, subject);
      const initial = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ",
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
      };
      const initial_subjects = initial.Sales.subjects;
      const expected = {
        Account: {
          accessible: false,
          subjects: {
            Price: "READ",
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
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.deep.equal(expected);
      expect(result).not.to.equal(initial);
      expect(result.Sales).to.equal(initial.Sales);
      expect(result.Sales.subjects).not.to.equal(initial_subjects);
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
        Sales: {},
      };

      // acts
      const result = Reducer(initial, action);

      // asserts
      expect(result).to.equal(initial);
    });
  });
});
