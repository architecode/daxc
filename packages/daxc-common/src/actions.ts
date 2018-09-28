import { ActionWithPayload } from "./action.util";
import { Actions as Resources, ActionTypes as ResourcesActionTypes, Payload as ResourcesPayload } from "./resources";
import { Actions as Roles, ActionTypes as RolesActionTypes, Payload as RolesPayload } from "./roles";

export const Actions = { Resources, Roles };

export const ActionTypes = {
  Resources: ResourcesActionTypes,
  Roles: RolesActionTypes,
};

export { ResourcesPayload, RolesPayload };

