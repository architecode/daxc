import { RolesPermissions } from "./PERMISSIONS";
import { RolesSubjects } from "./SUBJECTS";

export interface IRolesAccess {
  resources: {
    [resource: string]: {
      accessible?: boolean;
      permissions?: { [name: string]: RolesPermissions; };
      subjects?: { [name: string]: RolesSubjects; };
    };
  };
}
