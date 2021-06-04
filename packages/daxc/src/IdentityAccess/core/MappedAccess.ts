import {
  ResourcesPermissions,
  RolesPermissions,
} from "daxc-common";

export type MappedAccess = {
  [resource: string]: MappedAccessValue;
};

export type MappedAccessValue = {
  accessible: {
    initial: boolean | undefined;
    roles: { role: string; value: boolean | undefined; }[];
  };
  permissions: {
    [permission: string]: {
      initial: ResourcesPermissions | undefined;
      roles: { role: string; value: RolesPermissions; }[];
    };
  };
};
