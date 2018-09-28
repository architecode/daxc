import { isNullOrUndefined } from "util";
import { PERMISSIONS, SUBJECTS } from "daxc-common";

export type AccessDataReducing<T> = (accumulator: T, value: T, initial?: T, role?: string) => T;
export interface AccessDataReducer<Permissions, Subjects> {
  accessible: AccessDataReducing<boolean>;
  permissions: AccessDataReducing<Permissions>;
  subjects: AccessDataReducing<Subjects>;
}

export const ACCESS_DATA_REDUCER: AccessDataReducer<PERMISSIONS, SUBJECTS> = {
  accessible: (result, value) => isNullOrUndefined(result) && isNullOrUndefined(value) ? undefined : (result || value),
  permissions: (result, value) => {
    if (result === PERMISSIONS.All || value === PERMISSIONS.All) {
      return PERMISSIONS.All;
    } else if (result === PERMISSIONS.Attribute || value === PERMISSIONS.Attribute) {
      return PERMISSIONS.Attribute;
    } else if (result === PERMISSIONS.Owner || value === PERMISSIONS.Owner) {
      return PERMISSIONS.Owner;
    } else if (result === PERMISSIONS.None || value === PERMISSIONS.None) {
      return PERMISSIONS.None;
    } else {
      return result;
    }
  },
  subjects: (result, value) => {
    if (result === SUBJECTS.Read_Write || value === SUBJECTS.Read_Write) {
      return SUBJECTS.Read_Write;
    } else if (result === SUBJECTS.Read_WriteAttribute || value === SUBJECTS.Read_WriteAttribute) {
      return SUBJECTS.Read_WriteAttribute;
    } else if (result === SUBJECTS.Read_WriteOwner || value === SUBJECTS.Read_WriteOwner) {
      return SUBJECTS.Read_WriteOwner;
    } else if (result === SUBJECTS.ReadAttribute_WriteAttribute || value === SUBJECTS.ReadAttribute_WriteAttribute) {
      return SUBJECTS.ReadAttribute_WriteAttribute;
    } else if (result === SUBJECTS.ReadAttribute_WriteOwner || value === SUBJECTS.ReadAttribute_WriteOwner) {
      return SUBJECTS.ReadAttribute_WriteOwner;
    } else if (result === SUBJECTS.ReadOwner_WriteOwner || value === SUBJECTS.ReadOwner_WriteOwner) {
      return SUBJECTS.ReadOwner_WriteOwner;
    } else if (result === SUBJECTS.ReadOnly || value === SUBJECTS.ReadOnly) {
      return SUBJECTS.ReadOnly;
    } else if (result === SUBJECTS.ReadAttributeOnly || value === SUBJECTS.ReadAttributeOnly) {
      return SUBJECTS.ReadAttributeOnly;
    } else if (result === SUBJECTS.ReadOwnerOnly || value === SUBJECTS.ReadOwnerOnly) {
      return SUBJECTS.ReadOwnerOnly;
    } else if (result === SUBJECTS.None || value === SUBJECTS.None) {
      return SUBJECTS.None;
    } else {
      return result;
    }
  },
};
