import { isNullOrUndefined } from "util";
import { State } from "../state";

export interface AccessData<Permissions, Subjects> {
  roles: string[];
  resources: AccessResources<Permissions, Subjects>;
}

export interface AccessResources<Permissions, Subjects> {
  [resource: string]: MapValue<Permissions, Subjects>;
}

export interface MapValue<Permissions, Subjects> {
  accessible: {
    initial: boolean;
    roles: { role: string; value: boolean; }[];
  };
  permissions: {
    [permission: string]: {
      initial: Permissions;
      roles: { role: string; value: Permissions; }[];
    };
  };
  subjects: {
    [subject: string]: {
      initial: Subjects;
      roles: { role: string; value: Subjects; }[];
    };
  };
}

export const mapAccessData = <Permissions, Subjects>(roles: string[], state: State.ApplicationState<Permissions, Subjects>): AccessData<Permissions, Subjects> => {
  const resources = Object.keys(state.resources).reduce((result: AccessResources<Permissions, Subjects>, resource) => {
    const Resource = state.resources[resource];
    const permissions = Resource.permissions ? Object.keys(Resource.permissions) : [];
    const subjects = Resource.subjects ? Object.keys(Resource.subjects) : [];

    const initializeAccessValue = (_resource: State.ResourcesAccess<Permissions, Subjects>, _permissions: string[], _subjects: string[]) => {
      const value: MapValue<Permissions, Subjects> = {
        accessible: {
          initial: _resource.accessible,
          roles: []
        },
        permissions: {},
        subjects: {},
      };

      _permissions.forEach(each => {
        value.permissions[each] = {
          initial: _resource.permissions[each],
          roles: [],
        };
      });

      _subjects.forEach(each => {
        value.subjects[each] = {
          initial: _resource.subjects[each],
          roles: [],
        };
      });
      return value;
    };

    const value = initializeAccessValue(Resource, permissions, subjects);

    roles.forEach(role => {
      const Role = state.roles[role] || { resources: {} };
      const RoleResource = Role.resources[resource];

      if (RoleResource && !isNullOrUndefined(RoleResource.accessible)) {
        value.accessible.roles.push({ role, value: RoleResource.accessible });
      }

      permissions.forEach(each => {
        if (RoleResource && RoleResource.permissions && !isNullOrUndefined(RoleResource.permissions[each])) {
          value.permissions[each].roles.push({ role, value: RoleResource.permissions[each] });
        }
      });

      subjects.forEach(each => {
        if (RoleResource && RoleResource.subjects && !isNullOrUndefined(RoleResource.subjects[each])) {
          value.subjects[each].roles.push({ role, value: RoleResource.subjects[each] });
        }
      });
    });

    result[resource] = value;

    return result;
  }, {});

  return { roles: [...roles], resources };
};
