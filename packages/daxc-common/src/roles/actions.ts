import { ActionWithPayload, createAction } from "../action.util";
import { ActionTypes } from "./action.types";

export const Actions = {
  create: (role: string) => createAction<Payload>(ActionTypes.CREATE, { role }),
  makeAccessible: (role: string, resource: string) => createAction<Payload>(ActionTypes.RESOURCE_ACCESSIBLE_MAKE, { role, resource }),
  makeInaccessible: (role: string, resource: string) => createAction<Payload>(ActionTypes.RESOURCE_INACCESSIBLE_MAKE, { role, resource }),
  setPermission: (role: string, resource: string, permission: string, value: any) => createAction<Payload>(ActionTypes.RESOURCE_PERMISSION_SET, { role, resource, permission, value }),
  deletePermission: (role: string, resource: string, permission: string) => createAction<Payload>(ActionTypes.RESOURCE_PERMISSION_DELETE, { role, resource, permission }),
  setSubject: (role: string, resource: string, subject: string, value: any) => createAction<Payload>(ActionTypes.RESOURCE_SUBJECT_SET, { role, resource, subject, value }),
  deleteSubject: (role: string, resource: string, subject: string) => createAction<Payload>(ActionTypes.RESOURCE_SUBJECT_DELETE, { role, resource, subject }),
};

export interface Payload {
  role: string;
  resource?: string;
  permission?: string;
  subject?: string;
  value?: any;
}
