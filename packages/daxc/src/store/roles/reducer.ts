import { Actions, Action, ActionTypes, RolesPayload as Payload, ActionWithPayload } from "daxc-common";
import { createReducer } from "../reducer.util";
import { State } from "../../state";

const ActionHandlers = {
  [ActionTypes.Roles.CREATE]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role } = action.payload;
    return Object.assign({}, state, { [role]: { resources: {} } });
  },
  [ActionTypes.Roles.RESOURCE_ACCESSIBLE_MAKE]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource } = action.payload;
    const Role = state[role] || { resources: {} };
    const Resource = Role.resources[resource] || {};
    Resource.accessible = true;
    Role.resources[resource] = Resource;
    return Object.assign({}, state, { [role]: Role });
  },
  [ActionTypes.Roles.RESOURCE_INACCESSIBLE_MAKE]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource } = action.payload;
    const Role = state[role] || { resources: {} };
    const Resource = Role.resources[resource] || {};
    Resource.accessible = false;
    Role.resources[resource] = Resource;
    return Object.assign({}, state, { [role]: Role });
  },
  [ActionTypes.Roles.RESOURCE_PERMISSION_SET]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource, permission, value } = action.payload;
    const Role = state[role] || { resources: {} };
    const Resource = Role.resources[resource] || {};
    Resource.permissions = Resource.permissions ? Object.assign({}, Resource.permissions) : {};
    Resource.permissions[permission] = value;
    Role.resources[resource] = Resource;
    return Object.assign({}, state, { [role]: Role });
  },
  [ActionTypes.Roles.RESOURCE_PERMISSION_DELETE]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource, permission } = action.payload;
    const Role = state[role];
    if (Role && Role.resources[resource]) {
      Role.resources[resource].permissions = Object.assign({}, Role.resources[resource].permissions);
      delete Role.resources[resource].permissions[permission];
    }
    return Object.assign({}, state);
  },
  [ActionTypes.Roles.RESOURCE_SUBJECT_SET]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource, subject, value } = action.payload;
    const Role = state[role] || { resources: {} };
    const Resource = Role.resources[resource] || {};
    Resource.subjects = Resource.subjects ? Object.assign({}, Resource.subjects) : {};
    Resource.subjects[subject] = value;
    Role.resources[resource] = Resource;
    return Object.assign({}, state, { [role]: Role });
  },
  [ActionTypes.Roles.RESOURCE_SUBJECT_DELETE]: (state: State.RolesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { role, resource, subject } = action.payload;
    const Role = state[role];
    if (Role && Role.resources[resource]) {
      Role.resources[resource].subjects = Object.assign({}, Role.resources[resource].subjects);
      delete Role.resources[resource].subjects[subject];
    }
    return Object.assign({}, state);
  },
};

const Reducer = (state: State.RolesState<any, any> = {}, action: Action) => {
  const reducer = createReducer(action, ActionHandlers);
  return reducer(state, action);
};

export default Reducer;
