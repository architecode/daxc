import { IdentityPermissions } from "./PERMISSIONS";

export interface IIdentityAccess {
  access: {
    [resource: string]: {
      accessible: boolean;
      permissions: {
        [permission: string]: IdentityPermissions;
      };
    };
  };
}
