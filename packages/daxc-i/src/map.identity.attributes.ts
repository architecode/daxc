import { MapIdentityAttributes } from "./core";
import { isNullOrUndefined } from "util";

export const MAP_IDENTITY_ATTRIBUTES: MapIdentityAttributes = (identity: { accessAttrs: any; accessAttrsObj?: object; }, resource: string) => {
  if (isNullOrUndefined(identity.accessAttrs) && isNullOrUndefined(identity.accessAttrsObj)) {
    return {};
  } else if (!Array.isArray(identity.accessAttrs) && typeof identity.accessAttrs === "object") {
    return { accessAttrs: identity.accessAttrs[resource] };
  } else if (!isNullOrUndefined(identity.accessAttrsObj)) {
    return { accessAttrs: identity.accessAttrsObj };
  } else {
    return { accessAttrs: identity.accessAttrs };
  }
};
