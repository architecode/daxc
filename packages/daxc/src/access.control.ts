import { Unsubscribe } from "redux";
import { IdentityAccessDTO } from "daxc-common";
import { State } from "./state";

export interface AccessControlResources<Permissions, Subjects> {
  create: (resource: string, objVal?: State.ResourcesAccess<Permissions, Subjects>) => AccessControl<Permissions, Subjects>;
  accessible: (resource: string, accessible: boolean) => AccessControl<Permissions, Subjects>;
  setPermission: (resource: string, permission: string, value: Permissions) => AccessControl<Permissions, Subjects>;
  deletePermission: (resource: string, permission: string) => AccessControl<Permissions, Subjects>;
  setSubject: (resource: string, subject: string, value: Subjects) => AccessControl<Permissions, Subjects>;
  deleteSubject: (resource: string, subject: string) => AccessControl<Permissions, Subjects>;
  getState: () => State.ResourcesState<Permissions, Subjects>;
}

export interface AccessControlRoles<Permissions, Subjects> {
  create: (roles: string) => AccessControl<Permissions, Subjects>;
  accessibleResource: (roles: string, resource: string, accessible: boolean) => AccessControl<Permissions, Subjects>;
  setResourcePermission: (roles: string, resource: string, permission: string, value: Permissions) => AccessControl<Permissions, Subjects>;
  deleteResourcePermission: (roles: string, resource: string, permission: string) => AccessControl<Permissions, Subjects>;
  setResourceSubject: (roles: string, resource: string, subject: string, value: Subjects) => AccessControl<Permissions, Subjects>;
  deleteResourceSubject: (roles: string, resource: string, subject: string) => AccessControl<Permissions, Subjects>;
  getState: () => State.RolesState<Permissions, Subjects>;
}

export interface AccessControl<Permissions, Subjects> {
  Resources: AccessControlResources<Permissions, Subjects>;
  Roles: AccessControlRoles<Permissions, Subjects>;
  dispatch(action: any): AccessControl<Permissions, Subjects>;
  getState(): State.ApplicationState<Permissions, Subjects>;
  subscribe(subscriber: () => void): Unsubscribe;
  toIdentityAccess(identity: { roles: string[]; }): IdentityAccessDTO<Permissions, Subjects>;
  toIdentityAccess(anyIdentity: any, toIdentity: (anyIdentity: any) => { roles: string[]; }, mapIdentityRoles?: () => string[]): IdentityAccessDTO<Permissions, Subjects>;
}
