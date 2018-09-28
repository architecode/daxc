import { ActionWithPayload, createAction } from "../action.util";
import { ActionTypes } from "./action.types";

export const Actions = {
  create: (resource: string, objVal?: { accessible?: boolean; permissions?: { [name: string]: any; }; subjects?: { [name: string]: any; }; }) => createAction<Payload>(ActionTypes.CREATE, { resource, objVal }),
  makeAccessible: (resource: string) => createAction<Payload>(ActionTypes.ACCESSIBLE_MAKE, { resource }),
  makeInaccessible: (resource: string) => createAction<Payload>(ActionTypes.INACCESSIBLE_MAKE, { resource }),
  setPermission: (resource: string, permission: string, value: any) => createAction<Payload>(ActionTypes.PERMISSION_SET, { resource, permission, value }),
  deletePermission: (resource: string, permission: string) => createAction<Payload>(ActionTypes.PERMISSION_DELETE, { resource, permission }),
  setSubject: (resource: string, subject: string, value: any) => createAction<Payload>(ActionTypes.SUBJECT_SET, { resource, subject, value }),
  deleteSubject: (resource: string, subject: string) => createAction<Payload>(ActionTypes.SUBJECT_DELETE, { resource, subject }),
};

export interface Payload {
  resource: string;
  objVal?: { accessible?: boolean; permissions?: { [name: string]: any; }; subjects?: { [name: string]: any; }; };
  permission?: string;
  subject?: string;
  value?: any;
}
