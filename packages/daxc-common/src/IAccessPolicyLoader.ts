import { IAccessPolicy } from "./IAccessPolicy";

export interface IAccessPolicyLoader {
  load: () => Promise<IAccessPolicy>;
}
