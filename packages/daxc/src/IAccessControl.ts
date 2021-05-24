import { IIdentityAccess, IIdentityBase } from "daxc-common";

export interface IAccessControl {
  toIdentityAccess: (identity: IIdentityBase) => Promise<IIdentityAccess>;
}
