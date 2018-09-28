import { expect } from "chai";
import { Actions } from "./actions";
import { ActionTypes } from "./action.types";

describe("#RESOURCES/actions.js tests", () => {
  describe("#ActionCreators.create()", () => {
    it("expect to create the CREATE action without objVal", () => {
      // arranges
      const resource = "Sales";
      const objVal: any = undefined;
      const expected = {
        type: ActionTypes.CREATE,
        payload: {
          resource,
          objVal,
        },
      };

      // acts
      const action = Actions.create(resource);

      // asserts
      expect(action).to.deep.equal(expected);
    });

    it("expect to create the CREATE action with objVal", () => {
      // arranges
      const resource = "Sales";
      const objVal: any = {
        accessible: true,
      };
      const expected = {
        type: ActionTypes.CREATE,
        payload: {
          resource,
          objVal,
        },
      };

      // acts
      const action = Actions.create(resource, objVal);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.makeAccessible()", () => {
    it("expect to create the ACCESSIBLE_MAKE action", () => {
      // arranges
      const resource = "Sales";
      const expected = {
        type: ActionTypes.ACCESSIBLE_MAKE,
        payload: {
          resource,
        },
      };

      // acts
      const action = Actions.makeAccessible(resource);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.makeInaccessible()", () => {
    it("expect to create the INACCESSIBLE_MAKE action", () => {
      // arranges
      const resource = "Sales";
      const expected = {
        type: ActionTypes.INACCESSIBLE_MAKE,
        payload: {
          resource,
        },
      };

      // acts
      const action = Actions.makeInaccessible(resource);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.setPermission()", () => {
    it("expect to create the PERMISSION_SET action", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const value = "ALL";
      const expected = {
        type: ActionTypes.PERMISSION_SET,
        payload: {
          resource,
          permission,
          value,
        },
      };

      // acts
      const action = Actions.setPermission(resource, permission, value);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.deletePermission()", () => {
    it("expect to create the PERMISSION_DELETE action", () => {
      // arranges
      const resource = "Sales";
      const permission = "Edit";
      const expected = {
        type: ActionTypes.PERMISSION_DELETE,
        payload: {
          resource,
          permission,
        },
      };

      // acts
      const action = Actions.deletePermission(resource, permission);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.setSubject()", () => {
    it("expect to create the SUBJECT_SET action", () => {
      // arranges
      const resource = "Sales";
      const subject = "Name";
      const value = "READ";
      const expected = {
        type: ActionTypes.SUBJECT_SET,
        payload: {
          resource,
          subject,
          value,
        },
      };

      // acts
      const action = Actions.setSubject(resource, subject, value);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });

  describe("#ActionCreators.deleteSubject()", () => {
    it("expect to create the SUBJECT_DELETE action", () => {
      // arranges
      const resource = "Sales";
      const subject = "Name";
      const expected = {
        type: ActionTypes.SUBJECT_DELETE,
        payload: {
          resource,
          subject,
        },
      };

      // acts
      const action = Actions.deleteSubject(resource, subject);

      // asserts
      expect(action).to.deep.equal(expected);
    });
  });
});
