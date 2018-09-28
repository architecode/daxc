import { expect } from "chai";
import { Actions } from "./actions";
import { ActionTypes } from "./action.types";

describe("#ROLES/actions.js tests", () => {
  describe("#ActionCreators.create()", () => {
    it("expect to create the CREATE action", () => {
      // arranges
      const role = "Admin";
      const expected = {
        type: ActionTypes.CREATE,
        payload: {
          role,
        },
      };

      // acts
      const action = Actions.create(role);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.makeAccessible()", () => {
    it("expect to create the RESOURCE_ACCESSIBLE_MAKE action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const expected = {
        type: ActionTypes.RESOURCE_ACCESSIBLE_MAKE,
        payload: {
          role,
          resource,
        },
      };

      // acts
      const action = Actions.makeAccessible(role, resource);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.makeInaccessible()", () => {
    it("expect to create the RESOURCE_INACCESSIBLE_MAKE action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const expected = {
        type: ActionTypes.RESOURCE_INACCESSIBLE_MAKE,
        payload: {
          role,
          resource,
        },
      };

      // acts
      const action = Actions.makeInaccessible(role, resource);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.setPermission()", () => {
    it("expect to create the RESOURCE_PERMISSION_SET action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const expected = {
        type: ActionTypes.RESOURCE_PERMISSION_SET,
        payload: {
          role,
          resource,
          permission,
          value,
        },
      };

      // acts
      const action = Actions.setPermission(role, resource, permission, value);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.deletePermission()", () => {
    it("expect to create the RESOURCE_PERMISSION_DELETE action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const permission = "Edit";
      const expected = {
        type: ActionTypes.RESOURCE_PERMISSION_DELETE,
        payload: {
          role,
          resource,
          permission,
        },
      };

      // acts
      const action = Actions.deletePermission(role, resource, permission);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.setSubject()", () => {
    it("expect to create the RESOURCE_SUBJECT_SET action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Name";
      const value = "READ";
      const expected = {
        type: ActionTypes.RESOURCE_SUBJECT_SET,
        payload: {
          role,
          resource,
          subject,
          value,
        },
      };

      // acts
      const action = Actions.setSubject(role, resource, subject, value);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.deleteSubject()", () => {
    it("expect to create the RESOURCE_SUBJECT_DELETE action", () => {
      // arranges
      const role = "Admin";
      const resource = "Sales";
      const subject = "Name";
      const expected = {
        type: ActionTypes.RESOURCE_SUBJECT_DELETE,
        payload: {
          role,
          resource,
          subject,
        },
      };

      // acts
      const action = Actions.deleteSubject(role, resource, subject);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });
});
