import { IAccessPolicyLoader, IIdentityAccessResolver } from "daxc-common";
import { IdentityAccessResolver } from "./IdentityAccess/IdentityAccessResolver";
import { IAccessControl } from "./IAccessControl";

export const AccessControlFactory = {
  create: (loader: IAccessPolicyLoader, resolver: IIdentityAccessResolver = IdentityAccessResolver): IAccessControl =>
    ((Loader: IAccessPolicyLoader, Resolver: IIdentityAccessResolver): IAccessControl => ({
      toIdentityAccess: async (identity) => {
        const policy = await Loader.load();

        return Resolver.resolve(policy, identity);
      },
    }))(loader, resolver),
};
