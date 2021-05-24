import { IAccessPolicy } from "./IAccessPolicy";
import { IIdentityAccess } from "./IIdentityAccess";
import { IIdentityBase } from "./IIdentityBase";

export interface IIdentityAccessResolver {
  resolve: (policy: IAccessPolicy, identity: IIdentityBase) => IIdentityAccess;
}
