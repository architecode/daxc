import { isNullOrUndefined } from "util";
import { IdentityAccessDTO } from "daxc-common";
import { State } from "../state";
import { AccessDataReducer, AccessDataReducing } from "../access.data.reducer";
import { mapAccessData } from "./map.access.data";

const AccessDataReducingCaller = <T>(reducing: AccessDataReducing<T>, value: { initial: T; roles: { role: string; value: T; }[]; }) =>
  value.roles.reduce((result: T, each) =>
    reducing(result, each.value, value.initial, each.role), value.initial);

export const toIdentityAccess = <Permissions, Subjects>(
  identity: any,
  mapIdentityRoles: (identity: any) => string[],
  state: State.ApplicationState<Permissions, Subjects>,
  reducer: AccessDataReducer<Permissions, Subjects>,
) => {
  const accessData = mapAccessData(mapIdentityRoles(identity), state);
  const resources = Object.keys(accessData.resources);

  return resources.reduce((result: IdentityAccessDTO<Permissions, Subjects>, resource) => {
    const Resource = accessData.resources[resource];
    const permissions = Object.keys(Resource.permissions);
    const subjects = Object.keys(Resource.subjects);

    result.access[resource] = {
      accessible: isNullOrUndefined(Resource.accessible.initial) ? false : AccessDataReducingCaller<boolean>(reducer.accessible, Resource.accessible),
      permissions: permissions.reduce((result: { [name: string]: Permissions; }, permission) => {
        result[permission] = AccessDataReducingCaller<Permissions>(reducer.permissions, Resource.permissions[permission]);
        return result;
      }, {}),
      subjects: subjects.reduce((result: { [name: string]: Subjects; }, subject) => {
        result[subject] = AccessDataReducingCaller<Subjects>(reducer.subjects, Resource.subjects[subject]);
        return result;
      }, {}),
    };

    return result;
  }, { identity, access: {} });
};
