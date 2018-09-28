import { expect } from "chai";
import * as sinon from "sinon";
import { PERMISSIONS, SUBJECTS } from "daxc-common";
import { MAP_IDENTITY_ATTRIBUTES } from "./map.identity.attributes";
import { ATTRIBUTE_OPTS } from "./attribute.opts";
import { ACCESS_REDUCER } from "./access.reducer";

describe("#access.reducer.js tests", () => {
  describe("#ACCESS_REDUCER", () => {
    describe("ACCESS_REDUCER.accessible()", () => {
      it("expect to reduce accessible", () => {
        // arranges

        // acts

        // asserts
        expect(ACCESS_REDUCER.accessible(true)).to.be.true;
        expect(ACCESS_REDUCER.accessible(false)).to.be.false;
      });
    });

    describe("ACCESS_REDUCER.permissions()", () => {
      let attrsSpy: any;
      let ownerSpy: any;

      before(() => {
        attrsSpy = sinon.spy(ATTRIBUTE_OPTS, "attributes");
        ownerSpy = sinon.spy(ATTRIBUTE_OPTS, "owner");
      });

      beforeEach(() => {
        attrsSpy.resetHistory();
        ownerSpy.resetHistory();
      });

      after(() => {
        attrsSpy.restore();
        ownerSpy.restore();
      });

      it("expect to reduce PERMISSIONS.All", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.All, {}, {}, MAP_IDENTITY_ATTRIBUTES, undefined)).to.be.true;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.All, { accessAttrs: ["A", "B"], accessOwner: "TestUser" }, { accessAttrs: ["B", "C"], accessOwner: "Others" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.true;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.All, { accessAttrs: ["A"], accessOwner: "TestUser" }, { accessAttrs: ["C"], accessOwner: "TestUser" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.true;
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce PERMISSIONS.Attribute", () => {
        // arranges

        // acts

        // asserts
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.Attribute, { accessAttrs: ["A", "B"], accessOwner: "TestUser" }, { accessAttrs: ["B", "C"], accessOwner: "Others" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.true;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.Attribute, { accessAttrs: ["A"], accessOwner: "TestUser" }, { accessAttrs: ["C"], accessOwner: "TestUser" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.false;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.Attribute, { accessAttrs: { Test: "A" }, accessOwner: "TestUser" }, { name: "Test", accessAttrs: ["A", "C"], accessOwner: "Others" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.true;
        expect(attrsSpy.callCount).to.equal(3);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce PERMISSIONS.Owner", () => {
        // arranges

        // acts

        // asserts
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.Owner, { accessAttrs: ["A", "B"], accessOwner: "TestUser" }, { accessAttrs: ["B", "C"], accessOwner: "Others" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.false;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.Owner, { accessAttrs: ["A"], accessOwner: "TestUser" }, { accessAttrs: ["C"], accessOwner: "TestUser" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.true;
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(2);
      });

      it("expect to reduce PERMISSIONS.None", () => {
        // arranges

        // acts

        // asserts
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.None, { accessAttrs: ["A", "B"], accessOwner: "TestUser" }, { accessAttrs: ["B", "C"], accessOwner: "Others" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.false;
        expect(ACCESS_REDUCER.permissions("Test", PERMISSIONS.None, { accessAttrs: ["A"], accessOwner: "TestUser" }, { accessAttrs: ["C"], accessOwner: "TestUser" }, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.be.false;
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(0);
      });
    });

    describe("ACCESS_REDUCER.subjects()", () => {
      const val01 = { accessAttrs: ["A", "B"], accessOwner: "TestUser" };
      const val02 = { accessAttrs: ["B", "C"], accessOwner: "Others" };
      const val03 = { accessAttrs: ["A"], accessOwner: "TestUser" };
      const val04 = { accessAttrs: ["C"], accessOwner: "TestUser" };
      let attrsSpy: any;
      let ownerSpy: any;

      before(() => {
        attrsSpy = sinon.spy(ATTRIBUTE_OPTS, "attributes");
        ownerSpy = sinon.spy(ATTRIBUTE_OPTS, "owner");
      });

      beforeEach(() => {
        attrsSpy.resetHistory();
        ownerSpy.resetHistory();
      });

      after(() => {
        attrsSpy.restore();
        ownerSpy.restore();
      });

      it("expect to reduce SUBJECTS.Read_Write", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_Write, {}, {}, MAP_IDENTITY_ATTRIBUTES, undefined)).to.deep.equal({ read: true, write: true });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce SUBJECTS.Read_WriteAttribute", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteAttribute, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteAttribute, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: true });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteAttribute, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(attrsSpy.callCount).to.equal(3);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce SUBJECTS.Read_WriteOwner", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteOwner, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteOwner, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.Read_WriteOwner, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: true });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(3);
      });

      it("expect to reduce SUBJECTS.ReadAttribute_WriteAttribute", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteAttribute, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteAttribute, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: true });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteAttribute, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(attrsSpy.callCount).to.equal(3);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce SUBJECTS.ReadAttribute_WriteOwner", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteOwner, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteOwner, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttribute_WriteOwner, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: true });
        expect(attrsSpy.callCount).to.equal(3);
        expect(ownerSpy.callCount).to.equal(3);
      });

      it("expect to reduce SUBJECTS.ReadOwner_WriteOwner", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwner_WriteOwner, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwner_WriteOwner, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwner_WriteOwner, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: true });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(3);
      });

      it("expect to reduce SUBJECTS.ReadOnly", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOnly, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOnly, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOnly, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce SUBJECTS.ReadAttributeOnly", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttributeOnly, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttributeOnly, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadAttributeOnly, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(attrsSpy.callCount).to.equal(3);
        expect(ownerSpy.callCount).to.equal(0);
      });

      it("expect to reduce SUBJECTS.ReadOwnerOnly", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwnerOnly, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwnerOnly, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.ReadOwnerOnly, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: true, write: false });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(3);
      });

      it("expect to reduce SUBJECTS.None", () => {
        // arranges

        // acts

        // assertsAttribute
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.None, {}, {}, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.None, val01, val02, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(ACCESS_REDUCER.subjects("Test", SUBJECTS.None, val03, val04, MAP_IDENTITY_ATTRIBUTES, ATTRIBUTE_OPTS)).to.deep.equal({ read: false, write: false });
        expect(attrsSpy.callCount).to.equal(0);
        expect(ownerSpy.callCount).to.equal(0);
      });
    });
  });
});
