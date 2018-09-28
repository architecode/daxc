import { expect } from "chai";
import { PERMISSIONS, SUBJECTS } from "daxc-common";
import { ACCESS_DATA_REDUCER } from "./access.data.reducer";

describe("#access.data.reducer.js tests", () => {
  describe("#ACCESS_REDUCER.accessible()", () => {
    it("expect to reduce accessible", () => {
      // arranges

      // acts
      const result01 = ACCESS_DATA_REDUCER.accessible(false, false);
      const result02 = ACCESS_DATA_REDUCER.accessible(false, true);
      const result03 = ACCESS_DATA_REDUCER.accessible(true, false);
      const result04 = ACCESS_DATA_REDUCER.accessible(true, true);
      const result05 = ACCESS_DATA_REDUCER.accessible(undefined, undefined);

      // asserts
      expect(result01).to.be.false;
      expect(result02).to.be.true;
      expect(result03).to.be.true;
      expect(result04).to.be.true;
      expect(result05).to.be.undefined;
    });
  });

  describe("#ACCESS_REDUCER.permissions()", () => {
    it("expect to reduce permissions", () => {
      // arranges

      // acts

      // asserts
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.All, PERMISSIONS.All)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.All, PERMISSIONS.Attribute)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.All, PERMISSIONS.Owner)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.All, PERMISSIONS.None)).to.equal(PERMISSIONS.All);
      expect((ACCESS_DATA_REDUCER.permissions as any)(PERMISSIONS.All, "Others")).to.equal(PERMISSIONS.All);

      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Attribute, PERMISSIONS.All)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Attribute, PERMISSIONS.Attribute)).to.equal(PERMISSIONS.Attribute);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Attribute, PERMISSIONS.Owner)).to.equal(PERMISSIONS.Attribute);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Attribute, PERMISSIONS.None)).to.equal(PERMISSIONS.Attribute);
      expect((ACCESS_DATA_REDUCER.permissions as any)(PERMISSIONS.Attribute, "Others")).to.equal(PERMISSIONS.Attribute);

      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Owner, PERMISSIONS.All)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Owner, PERMISSIONS.Attribute)).to.equal(PERMISSIONS.Attribute);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Owner, PERMISSIONS.Owner)).to.equal(PERMISSIONS.Owner);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.Owner, PERMISSIONS.None)).to.equal(PERMISSIONS.Owner);
      expect((ACCESS_DATA_REDUCER.permissions as any)(PERMISSIONS.Owner, "Others")).to.equal(PERMISSIONS.Owner);

      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.None, PERMISSIONS.All)).to.equal(PERMISSIONS.All);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.None, PERMISSIONS.Attribute)).to.equal(PERMISSIONS.Attribute);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.None, PERMISSIONS.Owner)).to.equal(PERMISSIONS.Owner);
      expect(ACCESS_DATA_REDUCER.permissions(PERMISSIONS.None, PERMISSIONS.None)).to.equal(PERMISSIONS.None);
      expect((ACCESS_DATA_REDUCER.permissions as any)(PERMISSIONS.None, "Others")).to.equal(PERMISSIONS.None);

      expect((ACCESS_DATA_REDUCER.permissions as any)("Others", PERMISSIONS.All)).to.equal(PERMISSIONS.All);
      expect((ACCESS_DATA_REDUCER.permissions as any)("Others", PERMISSIONS.Attribute)).to.equal(PERMISSIONS.Attribute);
      expect((ACCESS_DATA_REDUCER.permissions as any)("Others", PERMISSIONS.Owner)).to.equal(PERMISSIONS.Owner);
      expect((ACCESS_DATA_REDUCER.permissions as any)("Others", PERMISSIONS.None)).to.equal(PERMISSIONS.None);
      expect((ACCESS_DATA_REDUCER.permissions as any)("Initial", "Others")).to.equal("Initial");
    });
  });

  describe("#ACCESS_REDUCER.subjects()", () => {
    it("expect to reduce subjects", () => {
      // arranges

      // acts

      // asserts
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_Write, SUBJECTS.None)).to.equal(SUBJECTS.Read_Write);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.Read_Write, "Others")).to.equal(SUBJECTS.Read_Write);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteAttribute, SUBJECTS.None)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.Read_WriteAttribute, "Others")).to.equal(SUBJECTS.Read_WriteAttribute);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.Read_WriteOwner, SUBJECTS.None)).to.equal(SUBJECTS.Read_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.Read_WriteOwner, "Others")).to.equal(SUBJECTS.Read_WriteOwner);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteAttribute, SUBJECTS.None)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadAttribute_WriteAttribute, "Others")).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttribute_WriteOwner, SUBJECTS.None)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadAttribute_WriteOwner, "Others")).to.equal(SUBJECTS.ReadAttribute_WriteOwner);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwner_WriteOwner, SUBJECTS.None)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadOwner_WriteOwner, "Others")).to.equal(SUBJECTS.ReadOwner_WriteOwner);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOnly, SUBJECTS.None)).to.equal(SUBJECTS.ReadOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadOnly, "Others")).to.equal(SUBJECTS.ReadOnly);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadAttributeOnly, SUBJECTS.None)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadAttributeOnly, "Others")).to.equal(SUBJECTS.ReadAttributeOnly);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadOwnerOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.ReadOwnerOnly, SUBJECTS.None)).to.equal(SUBJECTS.ReadOwnerOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.ReadOwnerOnly, "Others")).to.equal(SUBJECTS.ReadOwnerOnly);

      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadOwnerOnly);
      expect(ACCESS_DATA_REDUCER.subjects(SUBJECTS.None, SUBJECTS.None)).to.equal(SUBJECTS.None);
      expect((ACCESS_DATA_REDUCER.subjects as any)(SUBJECTS.None, "Others")).to.equal(SUBJECTS.None);

      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.Read_Write)).to.equal(SUBJECTS.Read_Write);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.Read_WriteAttribute)).to.equal(SUBJECTS.Read_WriteAttribute);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.Read_WriteOwner)).to.equal(SUBJECTS.Read_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadAttribute_WriteAttribute)).to.equal(SUBJECTS.ReadAttribute_WriteAttribute);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadAttribute_WriteOwner)).to.equal(SUBJECTS.ReadAttribute_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadOwner_WriteOwner)).to.equal(SUBJECTS.ReadOwner_WriteOwner);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadOnly)).to.equal(SUBJECTS.ReadOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadAttributeOnly)).to.equal(SUBJECTS.ReadAttributeOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.ReadOwnerOnly)).to.equal(SUBJECTS.ReadOwnerOnly);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Others", SUBJECTS.None)).to.equal(SUBJECTS.None);
      expect((ACCESS_DATA_REDUCER.subjects as any)("Initial", "Others")).to.equal("Initial");
    });
  });
});
