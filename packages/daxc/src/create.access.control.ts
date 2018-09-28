import { StoreEnhancer } from "redux";
import { Actions, PERMISSIONS, SUBJECTS } from "daxc-common";
import { buildStore } from "./store";
import { State } from "./state";
import { AccessControl } from "./access.control";
import { AccessDataReducer, ACCESS_DATA_REDUCER } from "./access.data.reducer";
import { Util } from "./util";

export interface Options<Permissions, Subjects> {
  accessDataReducer?: AccessDataReducer<Permissions, Subjects>;
  enhancer?: StoreEnhancer;
  listeners?: ((action: { type: string; payload?: any; }, state: State.ApplicationState<Permissions, Subjects>) => void)[];
}

export const createAccessControl = <Permissions = PERMISSIONS, Subjects = SUBJECTS>(initialState?: State.ApplicationState<Permissions, Subjects>, options: Options<Permissions, Subjects> = {}): AccessControl<Permissions, Subjects> => {
  return ((options: Options<Permissions, Subjects>) => {
    const store = buildStore(initialState, options.enhancer);
    const accessDataReducer: AccessDataReducer<any, any> = options.accessDataReducer || ACCESS_DATA_REDUCER;
    const listeners = options.listeners || [];
    const Instance: any = {};

    const initializeAccessControl = (instance: AccessControl<Permissions, Subjects>) => {
      const dispatchable = (instance: AccessControl<Permissions, Subjects>, action: any) => {
        instance.dispatch(action);
        return instance;
      };

      instance.dispatch = (action: any) => {
        store.dispatch(action);
        listeners.forEach(each => each(action, store.getState()));
        return instance;
      };
      instance.getState = () => store.getState();
      instance.subscribe = (subscriber: () => void) => store.subscribe(subscriber);
      instance.toIdentityAccess = (identity: Object, toIdentity?: Function, mapIdentityRoles: (identity: any) => string[] = (identity) => identity.roles) =>
        Util.toIdentityAccess(toIdentity ? toIdentity(identity) : identity, mapIdentityRoles, instance.getState(), accessDataReducer);
      instance.Resources = {
        create: (resource, objVal?) => dispatchable(instance, Actions.Resources.create(resource, objVal)),
        setPermission: (resource, permission, value) => dispatchable(instance, Actions.Resources.setPermission(resource, permission, value)),
        deletePermission: (resource, permission) => dispatchable(instance, Actions.Resources.deletePermission(resource, permission)),
        setSubject: (resource, subject, value) => dispatchable(instance, Actions.Resources.setSubject(resource, subject, value)),
        deleteSubject: (resource, subject) => dispatchable(instance, Actions.Resources.deleteSubject(resource, subject)),
        accessible: (resource, accessible) => {
          if (accessible) {
            instance.dispatch(Actions.Resources.makeAccessible(resource));
          } else {
            instance.dispatch(Actions.Resources.makeInaccessible(resource));
          }

          return instance;
        },
        getState: () => instance.getState().resources,
      };
      instance.Roles = {
        create: (role) => dispatchable(instance, Actions.Roles.create(role)),
        setResourcePermission: (role, resource, permission, value) => dispatchable(instance, Actions.Roles.setPermission(role, resource, permission, value)),
        deleteResourcePermission: (role, resource, permission) => dispatchable(instance, Actions.Roles.deletePermission(role, resource, permission)),
        setResourceSubject: (role, resource, subject, value) => dispatchable(instance, Actions.Roles.setSubject(role, resource, subject, value)),
        deleteResourceSubject: (role, resource, subject) => dispatchable(instance, Actions.Roles.deleteSubject(role, resource, subject)),
        accessibleResource: (role, resource, accessible) => {
          if (accessible) {
            instance.dispatch(Actions.Roles.makeAccessible(role, resource));
          } else {
            instance.dispatch(Actions.Roles.makeInaccessible(role, resource));
          }

          return instance;
        },
        getState: () => instance.getState().roles,
      };

      return instance;
    };

    return initializeAccessControl(Instance);
  })(options);
};
