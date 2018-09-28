import { IdentityAccessDTO } from "daxc-common";
import { State } from "../state";
import { AccessDataReducer } from "../access.data.reducer";
import { mapAccessData, AccessData } from "./map.access.data";
import { toIdentityAccess } from "./to.identity.access";

export const Util = {
  mapAccessData,
  toIdentityAccess,
};
