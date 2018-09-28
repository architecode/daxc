import { Action, ActionTypes, ResourcesPayload as Payload, ActionWithPayload } from "daxc-common";
import { createReducer } from "../reducer.util";
import { State } from "../../state";

const ActionHandlers = {
  [ActionTypes.Resources.CREATE]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource, objVal } = action.payload;
    return Object.assign({}, state, { [resource]: objVal || {} });
  },
  [ActionTypes.Resources.ACCESSIBLE_MAKE]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource } = action.payload;
    const Resource = state[resource] || {};
    Resource.accessible = true;
    return Object.assign({}, state, { [resource]: Resource });
  },
  [ActionTypes.Resources.INACCESSIBLE_MAKE]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource } = action.payload;
    const Resource = state[resource] || {};
    Resource.accessible = false;
    return Object.assign({}, state, { [resource]: Resource });
  },
  [ActionTypes.Resources.PERMISSION_SET]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource, permission, value } = action.payload;
    const Resource = state[resource] || {};
    Resource.permissions = Resource.permissions ? Object.assign({}, Resource.permissions) : {};
    Resource.permissions[permission] = value;
    return Object.assign({}, state, { [resource]: Resource });
  },
  [ActionTypes.Resources.PERMISSION_DELETE]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource, permission } = action.payload;
    const Resource = state[resource];
    if (Resource && Resource.permissions) {
      Resource.permissions = Object.assign({}, Resource.permissions);
      delete Resource.permissions[permission];
    }
    return Object.assign({}, state);
  },
  [ActionTypes.Resources.SUBJECT_SET]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource, subject, value } = action.payload;
    const Resource = state[resource] || {};
    Resource.subjects = Resource.subjects ? Object.assign({}, Resource.subjects) : {};
    Resource.subjects[subject] = value;
    return Object.assign({}, state, { [resource]: Resource });
  },
  [ActionTypes.Resources.SUBJECT_DELETE]: (state: State.ResourcesState<any, any>, action: ActionWithPayload<Payload>) => {
    const { resource, subject } = action.payload;
    const Resource = state[resource];
    if (Resource && Resource.subjects) {
      Resource.subjects = Object.assign({}, Resource.subjects);
      delete Resource.subjects[subject];
    }
    return Object.assign({}, state);
  },
};

const Reducer = (state: State.ResourcesState<any, any> = {}, action: Action) => {
  const reducer = createReducer(action, ActionHandlers);
  return reducer(state, action);
};

export default Reducer;
