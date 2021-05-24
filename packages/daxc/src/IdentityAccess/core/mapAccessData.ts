import {
  IAccessPolicy,
  ResourcesPermissions,
  RolesPermissions,
} from "daxc-common";

import { MappedAccess, MappedAccessValue } from "./MappedAccess";

export const mapAccessData = (policy: IAccessPolicy, roles: string[]): MappedAccess =>
  Object.keys(policy.resources)
    .reduce((result, resource) => {
      const Resource = policy.resources[resource];
      const ResourcePermissions = Resource.permissions || {};
      const _permissions = Object.keys(ResourcePermissions);

      const data: MappedAccessValue = {
        accessible: {
          initial: Resource.accessible,
          roles: [],
        },
        permissions: _permissions
          .reduce((result, permission) => {
            result[permission] = {
              initial: ResourcePermissions[permission],
              roles: [],
            };

            return result;
          }, {} as {
            [permission: string]: {
              initial: ResourcesPermissions;
              roles: { role: string; value: RolesPermissions; }[];
            };
          }),
      };

      roles.forEach((role) => {
        const Role = policy.roles[role] || { resources: {} };
        const RoleResource = Role.resources[resource];

        if (RoleResource) {
          if (typeof RoleResource.accessible === "boolean") {
            data.accessible.roles.push({
              role,
              value: RoleResource.accessible,
            });
          }

          if (RoleResource.permissions) {
            const RolesPermissions = RoleResource.permissions;

            _permissions.forEach((each) => {
              if (RolesPermissions[each]) {
                data.permissions[each].roles.push({
                  role,
                  value: RolesPermissions[each]
                });
              }
            });
          }
        }
      });

      result[resource] = data;

      return result;
    }, {} as MappedAccess);
