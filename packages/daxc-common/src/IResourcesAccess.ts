import { ResourcesPermissions } from "./PERMISSIONS";
import { ResourcesSubjects } from "./SUBJECTS";

export interface IResourcesAccess {
  accessible?: boolean;
  permissions?: { [permission: string]: ResourcesPermissions; };
  subjects?: { [subject: string]: ResourcesSubjects; };
}
