import {
  IAccessPolicy,
  IIdentityAccess,
  IIdentityBase,
} from "daxc-common";

import { AccessReducer, mapAccessData } from "./core";

export const IdentityAccessResolver = {
  resolve: (policy: IAccessPolicy, identity: IIdentityBase = {}): IIdentityAccess => {
    const { reinforcement } = policy.options || {};
    const resources = Object.keys(policy.resources);
    const roles = identity.roles || [];
    const mappedAccess = mapAccessData(policy, roles);
    const initial: IIdentityAccess = { access: {} };

    return resources.reduce((result, resource) => {
      result.access[resource] = {
        accessible: AccessReducer.accessible(mappedAccess, resource, reinforcement),
        permissions: AccessReducer.permissions(mappedAccess, resource, reinforcement),
      };

      return result;
    }, initial);
  },
};
