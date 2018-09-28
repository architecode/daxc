import { IdentityAccessDTO } from "daxc-common";
import { Access, IdentityAccess } from "./identity.access";
import { AnyAccessReducer, AnyAttributeOpts, AnyResource, AnyAttributes, MapIdentityAttributes } from "./core";
import { ACCESS_REDUCER } from "./access.reducer";
import { ATTRIBUTE_OPTS } from "./attribute.opts";

export interface IdentityAccessOptions {
  accessReducer?: AnyAccessReducer;
  attributeOpts?: AnyAttributeOpts;
}

type AnyAccess = {
  [resource: string]: {
    accessible: boolean;
    permissions: { [permission: string]: any; };
    subjects: { [subject: string]: any; };
  };
};

export const composeIdentityAccess = <Permissions, Subjects>(dto: IdentityAccessDTO<Permissions, Subjects>, options: IdentityAccessOptions = {}): IdentityAccess<Permissions, Subjects> => {
  return ((_dto: IdentityAccessDTO<Permissions, Subjects>, _options: IdentityAccessOptions) => {
    const accessReducer = _options.accessReducer || ACCESS_REDUCER;
    const attributeOpts = _options.attributeOpts || ATTRIBUTE_OPTS;

    const _access = (_resource: { name: string; }, _identity: any, _accessValue: AnyAccess, _reducer: AnyAccessReducer, _opts: AnyAttributeOpts, _mapIdentityAttributes: MapIdentityAttributes): Access => {
      const Resource = _accessValue[_resource.name] || { accessible: undefined, permissions: {}, subjects: {} };
      const permissions = Object.keys(Resource.permissions);
      const subjects = Object.keys(Resource.subjects);

      return {
        accessible: _reducer.accessible(Resource.accessible, _identity, _resource, _mapIdentityAttributes, _opts),
        permissions: permissions.reduce((result: { [name: string]: boolean; }, permission) => {
          result[permission] = _reducer.permissions(permission, Resource.permissions[permission], _identity, _resource, _mapIdentityAttributes, _opts);
          return result;
        }, {}),
        subjects: subjects.reduce((result: { [name: string]: { read: boolean; write: boolean; }; }, subject) => {
          result[subject] = _reducer.subjects(subject, Resource.subjects[subject], _identity, _resource, _mapIdentityAttributes, _opts);
          return result;
        }, {}),
      };
    };

    return {
      getIdentity: () => _dto.identity,
      access: (resource: any, opts?: AnyAttributeOpts, toResource?: (anyResource: any) => AnyResource, mapIdentityAttributes?: MapIdentityAttributes) =>
        _access(toResource ? toResource(resource) : resource, _dto.identity, _dto.access, accessReducer, opts || attributeOpts, mapIdentityAttributes),
      toDTO: () => _dto,
    };
  })(dto, options);
};
