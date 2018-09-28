import { isNullOrUndefined } from "util";
import { AttributeOpts, AnyAttributes } from "./core";

export const _matching = (vals?: any | string[], others?: any | string[]) => {
  if (isNullOrUndefined(vals) || isNullOrUndefined(others)) {
    return false;
  }
  vals = Array.isArray(vals) ? vals : [vals];
  others = Array.isArray(others) ? others : [others];

  for (const v of vals) {
    for (const o of others) {
      if (v === o && !isNullOrUndefined(o) && !isNullOrUndefined(v)) {
        return true;
      }
    }
  }

  return false;
};

export const ATTRIBUTE_OPTS: AttributeOpts<AnyAttributes, AnyAttributes> = {
  attributes: (identity = {}, resource = {}) => _matching(identity.accessAttrs, resource.accessAttrs),
  owner: (identity = {}, resource = {}) => _matching(identity.accessOwner, resource.accessOwner),
};
