import { MAP_IDENTITY_ATTRIBUTES } from "../map.identity.attributes";

export const IdentityAttributesMapper = (identity: any, resource?: string, mapIdentityAttributes = MAP_IDENTITY_ATTRIBUTES) => {
  const _identity = Object.assign({}, identity, mapIdentityAttributes(identity, resource));
  delete _identity.accessAttrsObj;
  return _identity;
};
